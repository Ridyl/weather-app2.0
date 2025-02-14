import express from 'express';
import axios from 'axios';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

// eslint-disable-next-line no-undef
const apiKey = process.env.VITE_API_KEY;

app.get('/api/search/:city', async (req, res) => {
	const cityName = req.params.city;

	try {
		const latlon_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
		const initial = await axios.get(latlon_url);
		console.log(initial.data);
		const { lon, lat } = initial.data.coord;

		const weather_url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
		const weather = await axios.get(weather_url);
		console.log(weather.data);

		const weatherData = {
			current: initial.data,
			forecast: weather.data,
		};

		res.send(weatherData);
	} catch (err) {
		console.error('API call error:', err.message);
		res.status(500).send({ error: 'Failed to fetch weather data' });
	}
});

export default app;
