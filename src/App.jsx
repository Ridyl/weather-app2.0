import WeatherDisplay from './components/WeatherDisplay';
import useWeather from './hooks/useWeather';
import rain_clouds from './images/rain_clouds.png';
import cloudy from './images/cloudy.png';
import thunderstorm from './images/thunderstorm.png';
import snow from './images/snow.png';
import sunny from './images/sunny.png';
import fog from './images/fog.png';

function App() {
	const { current } = useWeather();
	let weather = cloudy;

	if (current) {
		const imgNum = current.weather_id;
		if (imgNum >= 200 && imgNum < 300) {
			weather = thunderstorm;
		} else if (imgNum >= 300 && imgNum < 400) {
			weather = rain_clouds;
		} else if (imgNum >= 500 && imgNum < 600) {
			weather = rain_clouds;
		} else if (imgNum >= 600 && imgNum < 700) {
			weather = snow;
		} else if (imgNum >= 700 && imgNum < 800) {
			weather = fog;
		} else if (imgNum === 800) {
			weather = sunny;
		} else if (imgNum > 800 && imgNum < 900) {
			weather = cloudy;
		}

		return (
			<div
				className='inline-grid grid-rows-12 grid-cols-12 w-full bg-cover'
				style={{ backgroundImage: `url(${weather})` }}
			>
				<WeatherDisplay />
			</div>
		);
	}

	return (
		<div
			className='inline-grid grid-rows-12 grid-cols-12 w-full bg-cover'
			style={{ backgroundImage: `url(${weather})` }}
		>
			<WeatherDisplay />
		</div>
	);
}

export default App;
