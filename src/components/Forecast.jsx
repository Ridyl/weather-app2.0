import useWeather from '../hooks/useWeather';

export default function Forecast() {
	const { forecast } = useWeather();
	if (!forecast) return <></>;
	const days = forecast.map((day) => day.date);
	const high = forecast.map((high) => Math.round(high.max_temp));
	const low = forecast.map((low) => Math.round(low.min_temp));
	const rain = forecast.map((pop) => pop.pop);

	function ForecastCard() {
		return (
			<div className='flex col-start-4 row-start-10 row-span-3 col-span-9 cursor-default ml-2 pb-4'>
				{days.map((day, i) => (
					<>
						<div className='flex flex-1 flex-col justify-around text-white p-2 ml-1 mr-1 border-b-1 rounded-3xl shadow-2xl backdrop-blur-xs backdrop-brightness-80 duration-300 ease-in-out hover:scale-105'>
							<div>
								<p className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
									High: {high[i]}&deg;
								</p>
								<p className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
									Low: {low[i]}&deg;
								</p>
								<p className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
									Precipitation: {rain[i]}in
								</p>
							</div>
							<div>
								<p className='text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
									{day}
								</p>
								<div className='flex flex-col'>
									<span
										className='block h-2 bg-red-500 mt-3'
										style={{ width: (high[i] / 100) * 100 }}
									></span>
									<span
										className='block h-2 bg-green-500 mt-2'
										style={{ width: (low[i] / 100) * 100 }}
									></span>
									<span
										className='block h-2 bg-blue-500 mt-2'
										style={{ width: (rain[i] / 5) * 100 }}
									></span>
								</div>
							</div>
						</div>
					</>
				))}
			</div>
		);
	}

	return <ForecastCard />;
}
