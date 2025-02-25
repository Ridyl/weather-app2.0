import { useState } from 'react';

export default function RightData({ weather }) {
	const weatherCodes = {
		101: 'No Weather Data to Pull',

		200: 'Thunderstorm with Light Rain',
		201: 'Thunderstorm with Rain',
		202: 'Thunderstorm with Heavy Rain',
		210: 'Light Thunderstorm',
		211: 'Thunderstorm',
		212: 'Heavy Thunderstorm',
		221: 'Ragged Thunderstorm',
		230: 'Thunderstorm with Light Drizzle',
		231: 'Thunderstorm with Drizzle',
		232: 'Thunderstorm with Heavy Drizzle',

		300: 'Light Intensity Drizzle',
		301: 'Drizzle',
		302: 'Heavy Intensity Drizzle',
		310: 'Light Intensity Drizzle Rain',
		311: 'Drizzle Rain',
		312: 'Heavy Intensity Drizzle Rain',
		313: 'Shower Rain and Drizzle',
		314: 'Heavy Shower Rain and Drizzle',
		321: 'Shower Drizzle',

		500: 'Light Rain',
		501: 'Moderate Rain',
		502: 'Heavy Intensity Rain',
		503: 'Very Heavy Rain',
		504: 'Extreme Rain',
		511: 'Freezing Rain',
		520: 'Light Intensity Shower Rain',
		521: 'Shower Rain',
		522: 'Heavy Intensity Shower Rain',
		531: 'Ragged Shower Rain',

		600: 'Light Snow',
		601: 'Snow',
		602: 'Heavy Snow',
		611: 'Sleet',
		612: 'Light Shower Sleet',
		613: 'Shower Sleet',
		615: 'Light Rain and Snow',
		616: 'Rain and Snow',
		620: 'Light Shower Snow',
		621: 'Shower Snow',
		622: 'Heavy Shower Snow',

		701: 'Mist',
		711: 'Smoke',
		721: 'Haze',
		731: 'Sand/Dust Whirls',
		741: 'Fog',
		751: 'Sand',
		761: 'Dust',
		762: 'Volcanic Ash',
		771: 'Squalls',
		781: 'Tornado',

		800: 'Clear Sky',

		801: 'Few Clouds: 11-25%',
		802: 'Scattered Clouds: 25-50%',
		803: 'Broken Clouds: 51-84%',
		804: 'Overcast Clouds: 85-100%',
	};

	let [data, setData] = useState({
		id: 101,
		main: 'Enter an area to see the weather!',
		desciption:
			'Once that is done all current and future weather will be populated!',
	});

	if (weather) {
		setData(weather);
	}

	return (
		<div className='grid row-span-8 col-span-5 mt-40 p-10'>
			<div>
				<h2 className='text-3xl text-green-400'>Here&apos;s the Weather:</h2>
				<p className='text-7xl text-white font-semibold'>
					{weatherCodes[data.id]}
				</p>
			</div>
			<div className='flex flex-col'>
				<p className='text-2xl text-white pb-8'>
					Local Time: USA, Friday, Feb 20, 2025, 1:55PM
				</p>
				<p className='text-xl text-white font-light'>
					{/* Variable clouds with snow showers. High of 11&deg;F. Winds 17&deg;E at
					10 to 20 mph. Chance of percipitation 50%. */}
					{data.main}
				</p>
				<p className='text-xl text-white font-light'>{data.desciption}</p>
			</div>
		</div>
	);
}
