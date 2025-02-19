import LeftChart from './LeftChart';

export default function LeftData() {
	let uv = 2;
	let degree = 310;

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
					<p className='flex-1'>20&deg;</p>
					<p className='text-sm mr-0'>feels</p>
					<p>18&deg;</p>
				</div>
				{/* Humidity and Wind */}
				<div className='flex items-baseline'>
					<p className='text-4xl flex-1 font-light'>5.8%</p>
					<p className='text-sm ml-0.5'>Wind: {findDirection(degree)} 6 mph</p>
				</div>
			</div>
			<UVMessage uv={uv} />
			<LeftChart />
			<div className='row-span-2'>
				<p className='underline text-2xl'>Alerts:</p>
				<p className='font-light'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
					eligendi ducimus quibusdam autem explicabo? Optio soluta quibusdam
					quam, a minima, dolore accusantium nisi reiciendis, minus provident
					magnam possimus cupiditate non.
				</p>
			</div>
		</div>
	);
}
