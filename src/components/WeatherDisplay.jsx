import useWeather from '../hooks/useWeather';
import { useState } from 'react';

const WeatherDisplay = () => {
	const { data, loading, error } = useWeather();
	const [city, setCity] = useState('');
	const { fetchWeather } = useWeather(city);

	const handleSearch = () => {
		fetchWeather(city);
	};

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	if (data) {
		// Add your code here
		let cityName = data.name;
		console.log(data);
		// return the necessary elements to display the weather information
		return (
			<>
				<h1>Weather App</h1>
				<div>
					<input
						placeholder='Search...'
						onChange={(e) => setCity(e.target.value)}
					></input>
					<button onClick={handleSearch}>Search</button>
				</div>
				<h2>{cityName}</h2>
				<p>{data.main.temp}</p>
			</>
		);
	}

	return (
		<>
			<h1>Weather App</h1>
			<div>
				<input
					placeholder='Search...'
					onChange={(e) => setCity(e.target.value)}
				></input>
				<button onClick={handleSearch}>Search</button>
			</div>
			<p>Please search for a city to display weather data.</p>
		</>
	);
};
export default WeatherDisplay;
