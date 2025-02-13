import { createContext, useReducer } from 'react';

const WeatherContext = createContext();

const initialState = {
	loading: null,
	data: null,
	error: null,
};

const weatherReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_START':
			return {
				...state,
				loading: [...state.loading, action.payload],
			};
		case 'FETCH_SUCCESS':
			return {
				...state,
				loading: [...state.data, action.payload],
			};
		case 'FETCH_ERROR':
			return {
				...state,
				loading: [...state.error, action.payload],
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

export default WeatherContext;
