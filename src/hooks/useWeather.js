import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

const weather_api_url = '/api/search';

const useWeather = () => {
	const { state, dispatch } = useContext(WeatherContext);

	const fetchWeather = async (city) => {
		if (!city) return;
		dispatch({ type: 'FETCH_START' });

		// Add logic for fetching weather data. Make sure you handle any errors gracefully
	};

	return { ...state, fetchWeather };
};

export default useWeather;
