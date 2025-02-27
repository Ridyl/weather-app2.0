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
		return (
			<>
				<div className='grid grid-rows-12 col-span-3 row-span-12 p-6 bg-transparent backdrop-blur-md bg-clip-padding rounded-r-3xl border-r border-gray-100'>
					<Search sCity={setCity} click={handleSearch} />
					<LeftData weather={data.current} />
				</div>
				<RightData />
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
			<RightData />
			<Forecast />
		</>
	);
};
export default WeatherDisplay;
