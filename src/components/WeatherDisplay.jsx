import useWeather from '../hooks/useWeather';
import Search from './Search';
import LeftData from './LeftData';
import { useState } from 'react';

const WeatherDisplay = () => {
	const { data, loading, error } = useWeather();
	const [city, setCity] = useState('');
	const { fetchWeather } = useWeather(city);

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
				weatherID: data.current.weather.id,
				param: data.current.weather.main,
				desc: data.current.weather.description,
				icon: data.current.weather.icon,
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
				<Search sCity={setCity} click={handleSearch} />
				<LeftData weather={currWeather.leftSide} />
			</>
		);
	}

	// Standard page return
	return (
		<div className='grid grid-rows-12 col-span-3 row-span-12 p-6 bg-transparent backdrop-blur-md bg-clip-padding rounded-r-3xl border-r border-gray-100'>
			<Search sCity={setCity} click={handleSearch} />
			<LeftData />
		</div>
	);
};
export default WeatherDisplay;
