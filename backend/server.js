import express from 'express';
import axios from 'axios';

const app = express();

const apiKey = import.meta.env.WEATHER_API_KEY;

app.get('/api/search/:city', async (req, res) => {
	const cityName = req.params.city;

	try {
		const latlon_url = `https://api.openweathermap.org/data/3.0/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
		const initial = await axios.get(latlon_url);
		// const { lon, lat } = initial.data.coord;

		// const weather_url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}$units=imperial`;
		// const weather = await axios.get(weather_url);

		res.send(initial.data);
	} catch (err) {
		console.error('API call error:', err.message);
		res.status(500).send({ error: 'Failed to fetch weather data' });
	}
});

export default app;
