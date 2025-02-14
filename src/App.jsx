import WeatherDisplay from '/src/components/WeatherDisplay';
import Header from './components/Header';

function App() {
	return (
		<div className='grid grid-cols-12 grid-rows-12 gap-1 px-4 py-4 leading-10'>
			{/* left side image div */}
			<div className='p-4 h-full bg-emerald-800 rounded-xl col-span-3 row-span-12'>
				This will be an image that will change dynamically based on location and
				weather
			</div>
			{/* Spanning search bar */}
			<div className='flex p-4 w-full bg-emerald-900 rounded-xl col-span-9'>
				<Header />
			</div>
			{/* Current weather display */}
			<div className='p-4 bg-cyan-600 rounded-xl col-span-7 row-span-11'>
				This will be where all the daily information is displayed
			</div>
			{/* forecast weather display */}
			<div className='p-4 w-full bg-emerald-800 rounded-xl row-span-12 col-span-2'>
				This will be used for the future forecast
			</div>
		</div>
	);
}

export default App;
