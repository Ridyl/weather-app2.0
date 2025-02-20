import WeatherDisplay from './components/WeatherDisplay';
import RightData from './components/RightData';
import Forecast from './components/Forecast';

function App() {
	return (
		<div className='inline-grid grid-rows-12 grid-cols-12 w-full bg-[url(src/images/rain_clouds.jpg)] bg-cover'>
			<WeatherDisplay />
			<RightData />
			<Forecast />
		</div>
	);
}

export default App;
