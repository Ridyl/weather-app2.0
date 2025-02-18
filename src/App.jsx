import Header from './components/Header';
import Forecast from './components/Forecast';

function App() {
	return (
		<div className='inline-grid grid-rows-12 grid-cols-12 w-full bg-[url(src/images/rain_clouds.jpg)] bg-cover'>
			<div className='grid grid-rows-12 col-span-3 row-span-12 p-6 bg-transparent backdrop-blur-md bg-clip-padding rounded-r-3xl border-r border-gray-100'>
				<Header />
				{/* Current weather display */}
				<div className='p-4 col-span-3 row-span-12'>
					This will be where all the daily information is displayed
				</div>
			</div>
			<div className='row-span-8 col-span-4'>Extra information</div>
			{/* forecast weather display */}
			<Forecast />
		</div>
	);
}

export default App;
