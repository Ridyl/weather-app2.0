import useWeather from '../hooks/useWeather';
import Search from './Search';
import LeftData from './LeftData';
import RightData from './RightData';
import Forecast from './Forecast';
import { useEffect, useState } from 'react';

const WeatherDisplay = () => {
	const { data, loading, error } = useWeather();
	const [city, setCity] = useState('');
	const { fetchWeather } = useWeather(city);

	// Current placeholder date and time until data recieved
	const now = new Date();
	const date = now.toLocaleString();
	const day = now.getDay();

	const daysOfWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	const handleSearch = async (event) => {
		event.preventDefault();
		await fetchWeather(city);
	};

	if (loading) return <p>Loading...</p>;

	if (error) return <p>Error: {error}</p>;

	// Return after data is present
	if (data) {
		// data {current: {...}, forecast: {...}}
		console.log('location:', data.location);
		console.log('current:', data.current);
		console.log('hourly:', data.hourly);
		console.log('forecast:', data.forecast);

		function formatDt(timestamp) {
			const localDate = new Date(timestamp * 1000);
			const localDay = new Intl.DateTimeFormat('en-US', {
				weekday: 'long',
			}).format(date);
			const formattedDate = Intl.DateTimeFormat('en-US', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			}).format(localDate);

			return `${localDay}, ${formattedDate}`;
		}

		return (
			<>
				<div className='grid grid-rows-12 col-span-3 row-span-12 p-6 bg-transparent backdrop-blur-md bg-clip-padding rounded-r-3xl border-r border-gray-100'>
					<Search sCity={setCity} click={handleSearch} />
					<LeftData weather={data.current} />
				</div>
				{/* <RightData
					weather={currWeather.rightSide}
					dateString={formatDt(currWeather.rightSide.time)}
				/> */}
				<Forecast />
			</>
		);
	}

	// Standard page return
	return (
		<>
			<div className='grid grid-rows-12 col-span-3 row-span-12 p-6 bg-transparent backdrop-blur-md bg-clip-padding rounded-r-3xl border-r border-gray-100'>
				<Search sCity={setCity} click={handleSearch} />
				<LeftData />
			</div>
			<RightData date={date} day={daysOfWeek[day]} />
			<Forecast />
		</>
	);
};
export default WeatherDisplay;
