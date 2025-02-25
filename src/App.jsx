import WeatherDisplay from './components/WeatherDisplay';

function App() {
	return (
		<div className='inline-grid grid-rows-12 grid-cols-12 w-full bg-[url(src/images/rain_clouds.jpg)] bg-cover'>
			<WeatherDisplay />
		</div>
	);
}

export default App;
