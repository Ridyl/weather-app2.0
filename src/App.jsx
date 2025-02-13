import { useState } from 'react';
import useWeather from './hooks/useWeather';
import WeatherDisplay from '/src/components/WeatherDisplay';

function App() {
	const [city, setCity] = useState('');
	const { fetchWeather } = useWeather(city);

	const handleSearch = () => {
		fetchWeather(city);
	};

	return (
		<div>
			<h1>Weather App</h1>
			<div>
				<input
					placeholder='Search...'
					onChange={(e) => setCity(e.target.value)}
				></input>
				<button onClick={handleSearch}>Search</button>
			</div>
			<WeatherDisplay />
		</div>
	);
}

export default App;
