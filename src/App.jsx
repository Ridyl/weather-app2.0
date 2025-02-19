import WeatherDisplay from './components/WeatherDisplay';
import Forecast from './components/Forecast';

function App() {
	return (
		<div className='inline-grid grid-rows-12 grid-cols-12 w-full bg-[url(src/images/rain_clouds.jpg)] bg-cover'>
			<div className='grid grid-rows-12 col-span-3 row-span-12 p-6 bg-transparent backdrop-blur-md bg-clip-padding rounded-r-3xl border-r border-gray-100'>
				<WeatherDisplay />
			</div>
			<div className='row-span-8 col-span-4'>Extra information</div>
			{/* forecast weather display */}
			<Forecast />
		</div>
	);
}

export default App;
