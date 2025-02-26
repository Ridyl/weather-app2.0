import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

const getlatlon_api_url = '/api/search';

const useWeather = () => {
	const { state, dispatch } = useContext(WeatherContext);

	const fetchWeather = async (city) => {
		if (!city) return;
		dispatch({
			type: 'FETCH_START',
			loading: true,
		});

		try {
			const initial = await fetch(`${getlatlon_api_url}/${city}`);
			if (!initial.ok) {
				throw new Error('Failed to fetch weather data');
			}
			const weatherData = await initial.json();
			dispatch({
				type: 'FETCH_SUCCESS',
				data: weatherData,
			});
		} catch (error) {
			dispatch({
				type: 'FETCH_ERROR',
				error: error.message,
			});
		}
	};

	return {
		data: state.data,
		location: state.location,
		current: state.current,
		hourly: state.hourly,
		forecast: state.forecast,
		loading: state.loading,
		error: state.error,
		fetchWeather,
	};
};

export default useWeather;
