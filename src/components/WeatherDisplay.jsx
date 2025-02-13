import useWeather from '../hooks/useWeather';

const WeatherDisplay = () => {
	const { data, loading, error } = useWeather();

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
				<h2>{cityName}</h2>
				<p>{data.main.temp}</p>
			</>
		);
	}

	return <p>Please search for a city to display weather data.</p>;
};

export default WeatherDisplay;
