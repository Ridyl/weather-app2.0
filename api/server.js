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
		// initial city name call - returns current weather of area
		const latlon_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
		const initial = await axios.get(latlon_url);
		const { lon, lat } = initial.data.coord;

		// call after extracting lat lon to get extra weather data
		const weather_url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
		const weather = await axios.get(weather_url);
		// object construction for all needed weather data
		const weatherData = {
			location: {
				country: initial.data.sys.country,
				city: initial.data.name,
				sunrise: initial.data.sys.sunrise,
				sunset: initial.data.sys.sunset,
			},

			current: {
				weather_id: weather.data.current.weather[0].id,
				temp: initial.data.main.temp,
				feel: initial.data.main.feels_like,
				min_temp: weather.data.daily[0].temp.min,
				max_temp: weather.data.daily[0].temp.max,
				humid: initial.data.main.humidity,
				wind_s: initial.data.wind.speed,
				wind_g: initial.data.wind.gust,
				wind_d: initial.data.wind.deg,
				clouds: initial.data.clouds.all,
				rain: weather.data.current.rain,
				snow: weather.data.current.snow,
				time_offset: weather.data.timezone,
				local_time: initial.data.dt,
				uv: weather.data.current.uvi,
				summary: weather.data.daily[0].summary,
			},

			// creats new objects from the hourly object array, starts at current hour, 12 total hours
			hourly: weather.data.hourly.slice(0, 12).map((hour) => ({
				temp: hour.temp,
				pop: hour.pop,
			})),

			// creates a new objects from the forecast object array, first daily index is current day
			forecast: weather.data.daily.slice(1, 7).map((day) => ({
				date: new Date(day.dt * 1000).toLocaleDateString('en-US', {
					weekday: 'long',
				}),
				min_temp: day.temp.min,
				max_temp: day.temp.max,
				pop: day.pop,
			})),
		};

		res.send(weatherData);
	} catch (err) {
		console.error('API call error:', err.message);
		res.status(500).send({ error: 'Failed to fetch weather data' });
	}
});

export default app;
