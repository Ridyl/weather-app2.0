export default function RightData() {
	const weatherCodes = {
		Thunderstorm: {
			200: { description: 'Thunderstorm with Light Rain', icon: '11d' },
			201: { description: 'Thunderstorm with Rain', icon: '11d' },
			202: { description: 'Thunderstorm with Heavy Rain', icon: '11d' },
			210: { description: 'Light Thunderstorm', icon: '11d' },
			211: { description: 'Thunderstorm', icon: '11d' },
			212: { description: 'Heavy Thunderstorm', icon: '11d' },
			221: { description: 'Ragged Thunderstorm', icon: '11d' },
			230: { description: 'Thunderstorm with Light Drizzle', icon: '11d' },
			231: { description: 'Thunderstorm with Drizzle', icon: '11d' },
			232: { description: 'Thunderstorm with Heavy Drizzle', icon: '11d' },
		},
		Drizzle: {
			300: { description: 'Light Intensity Drizzle', icon: '09d' },
			301: { description: 'Drizzle', icon: '09d' },
			302: { description: 'Heavy Intensity Drizzle', icon: '09d' },
			310: { description: 'Light Intensity Drizzle Rain', icon: '09d' },
			311: { description: 'Drizzle Rain', icon: '09d' },
			312: { description: 'Heavy Intensity Drizzle Rain', icon: '09d' },
			313: { description: 'Shower Rain and Drizzle', icon: '09d' },
			314: { description: 'Heavy Shower Rain and Drizzle', icon: '09d' },
			321: { description: 'Shower Drizzle', icon: '09d' },
		},
		Rain: {
			500: { description: 'Light Rain', icon: '10d' },
			501: { description: 'Moderate Rain', icon: '10d' },
			502: { description: 'Heavy Intensity Rain', icon: '10d' },
			503: { description: 'Very Heavy Rain', icon: '10d' },
			504: { description: 'Extreme Rain', icon: '10d' },
			511: { description: 'Freezing Rain', icon: '13d' },
			520: { description: 'Light Intensity Shower Rain', icon: '09d' },
			521: { description: 'Shower Rain', icon: '09d' },
			522: { description: 'Heavy Intensity Shower Rain', icon: '09d' },
			531: { description: 'Ragged Shower Rain', icon: '09d' },
		},
		Snow: {
			600: { description: 'Light Snow', icon: '13d' },
			601: { description: 'Snow', icon: '13d' },
			602: { description: 'Heavy Snow', icon: '13d' },
			611: { description: 'Sleet', icon: '13d' },
			612: { description: 'Light Shower Sleet', icon: '13d' },
			613: { description: 'Shower Sleet', icon: '13d' },
			615: { description: 'Light Rain and Snow', icon: '13d' },
			616: { description: 'Rain and Snow', icon: '13d' },
			620: { description: 'Light Shower Snow', icon: '13d' },
			621: { description: 'Shower Snow', icon: '13d' },
			622: { description: 'Heavy Shower Snow', icon: '13d' },
		},
		Atmosphere: {
			701: { description: 'Mist', icon: '50d' },
			711: { description: 'Smoke', icon: '50d' },
			721: { description: 'Haze', icon: '50d' },
			731: { description: 'Sand/Dust Whirls', icon: '50d' },
			741: { description: 'Fog', icon: '50d' },
			751: { description: 'Sand', icon: '50d' },
			761: { description: 'Dust', icon: '50d' },
			762: { description: 'Volcanic Ash', icon: '50d' },
			771: { description: 'Squalls', icon: '50d' },
			781: { description: 'Tornado', icon: '50d' },
		},
		Clear: {
			800: { description: 'Clear Sky', icons: ['01d', '01n'] },
		},
		Clouds: {
			801: { description: 'Few Clouds: 11-25%', icons: ['02d', '02n'] },
			802: { description: 'Scattered Clouds: 25-50%', icons: ['03d', '03n'] },
			803: { description: 'Broken Clouds: 51-84%', icons: ['04d', '04n'] },
			804: { description: 'Overcast Clouds: 85-100%', icons: ['04d', '04n'] },
		},
	};

	return (
		<div className='grid row-span-8 col-span-5 mt-40 p-10'>
			<div>
				<p className='text-7xl text-white font-semibold'>
					Thunderstorm with Heavy Rain
				</p>
			</div>
			<div className='flex flex-col'>
				<p className='text-2xl text-white pb-8'>
					USA, Friday, Feb 20, 2025, 1:55PM
				</p>
				<p className='text-xl text-white font-light'>
					Variable clouds with snow showers. High of 11&deg;F. Winds 17&deg;E at
					10 to 20 mph. Chance of percipitation 50%.
				</p>
			</div>
		</div>
	);
}
