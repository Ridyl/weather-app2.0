import LeftChart from './LeftChart';
import { useState } from 'react';
import PropType from 'prop-types';

export default function LeftData({ data, alerts }) {
	const [weather, setWeather] = useState({
		temp: 0,
		feel: 0,
		windDeg: 0,
		uv: 0,
		humid: 0,
	});

	const [alert, setAlert] = useState({
		event: 'No current weather alert for your area.',
		start: '',
		end: '',
		desc: 'We will update you if that changes anytime soon!',
		tags: '',
	});

	if (data) {
		setWeather(data);
	}

	if (alerts) {
		setAlert(alerts);
	}

	// Function to convert given degree to cardinal direction
	function findDirection(degree) {
		const cardinal = [
			'N',
			'NNE',
			'NE',
			'ENE',
			'E',
			'ESE',
			'SE',
			'SSE',
			'S',
			'SSW',
			'SW',
			'WSW',
			'W',
			'WNW',
			'NW',
			'NNW',
		];

		const section = Math.floor(degree / 22.5 + 0.5);
		return cardinal[section % 16];
	}

	// Function to create the UV index block, colors number and sets paragraph message
	function UVMessage({ uv }) {
		let roundedUV = Math.round(uv);
		let message;
		let color;

		let low =
			'If you get the chance, enjoy the sunshine today! The UV index is low so soak up the rays and rejuvinate! ';
		let med =
			'Stay in the shade during the hot part of the day, make sure you&apos;re wearing a shirt and have sunscreen on!';
		let high =
			'Avoid being outside during the hot part of the day. Make sure to see shade. A shirt, sunscreen and a hat are a must!';

		if (uv <= 2) {
			message = low;
			color = 'text-green-400';
		} else if (uv > 2 && uv <= 7) {
			message = med;
			color = 'text-yellow-500';
		} else if (uv > 7) {
			message = high;
			color = 'text-red-500';
		}

		return (
			<div className=''>
				<div className='flex justify-between text-2xl'>
					<p className='underline'>UV Index: </p>
					<p className={color}>{roundedUV}</p>
				</div>
				<div className='flex justify-between mt-1'>
					<p className='text-lg font-light'>{message}</p>
				</div>
			</div>
		);
	}

	return (
		<div className='grid col-span-3 row-span-12 text-white pl-3 pr-3'>
			<div className='flex flex-col row-span-3 justify-center'>
				{/* Current Temp */}
				<div className='flex text-6xl items-baseline'>
					<p className='flex-1'>{weather.temp}&deg;</p>
					<p className='text-sm mr-0'>feels</p>
					<p>{weather.feel}&deg;</p>
				</div>
				{/* Humidity and Wind */}
				<div className='flex items-baseline'>
					<p className='text-4xl flex-1 font-light'>{weather.humid}%</p>
					<p className='text-sm ml-0.5'>
						Wind: {findDirection(weather.windDeg)} 6 mph
					</p>
				</div>
			</div>
			<UVMessage uv={weather.uv} />
			<LeftChart />
			<div className='row-span-2 mt-4'>
				<p className='underline text-2xl'>Alerts:</p>
				<p className='font-bold'>{alert.event}</p>
				<p className='font-light'>{alert.desc}</p>
			</div>
		</div>
	);
}
