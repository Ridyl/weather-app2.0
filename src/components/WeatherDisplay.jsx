import useWeather from '../hooks/useWeather';
import Search from './Search';
import LeftData from './LeftData';
import RightData from './RightData';
import Forecast from './Forecast';
import { useState } from 'react';

const WeatherDisplay = () => {
	const { data, loading, error } = useWeather();
	const [city, setCity] = useState('');
	const { fetchWeather } = useWeather(city);

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

	const handleSearch = (event) => {
		event.preventDefault();
		fetchWeather(city);
	};

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	// Return after data is present
	if (data) {
		let currWeather = {
			leftSide: {
				sunrise: data.current.sunrise,
				sunset: data.current.sunset,
				temp: data.current.temp,
				feel: data.current.feels_like,
				humid: data.current.humidity,
				windSpeed: data.current.wind_speed,
				gustSpeed: data.current.wind_gust,
				windDeg: data.current.wind_deg,
				rain: data.current.rain,
				snow: data.current.snow,
				uv: data.current.uvi,
				hourly: data.hourly,
			},

			rightSide: {
				weatherID: data.current.weather,
				time: data.current.dt,
			},

			alerts: {
				event: data.alerts.event,
				start: data.alerts.start,
				end: data.alerts.end,
				desc: data.alerts.description,
				tags: data.alerts.tags,
			},
		};

		return (
			<>
				<div className='grid grid-rows-12 col-span-3 row-span-12 p-6 bg-transparent backdrop-blur-md bg-clip-padding rounded-r-3xl border-r border-gray-100'>
					<Search sCity={setCity} click={handleSearch} />
					<LeftData
						weather={currWeather.leftSide}
						alerts={currWeather.alerts}
					/>
				</div>
				<RightData weather={currWeather.rightSide} />
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
