import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const WeatherContext = createContext();

const initialState = {
	loading: false,
	data: null,
	error: null,
};

const weatherReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_START':
			return {
				...state,
				loading: true,
				error: null,
			};
		case 'FETCH_SUCCESS':
			return {
				...state,
				data: action.data,
				loading: false,
			};
		case 'FETCH_ERROR':
			return {
				...state,
				error: action.error,
				loading: false,
			};
	}
};

export const WeatherProvider = ({ children }) => {
	const [state, dispatch] = useReducer(weatherReducer, initialState);

	return (
		<WeatherContext.Provider value={{ state, dispatch }}>
			{children}
		</WeatherContext.Provider>
	);
};

WeatherProvider.propTypes = {
	children: PropTypes.any,
};

export default WeatherContext;
