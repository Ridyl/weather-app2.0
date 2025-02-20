import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip
);

export default function LeftChart() {
	const labels = [
		'Current',
		'+1',
		'+2',
		'+3',
		'+4',
		'+5',
		'+6',
		'+7',
		'+8',
		'+9',
		'+10',
		'+11',
	];

	const options = {
		responsive: true,
		interaction: {
			mode: 'index',
			intersect: false,
		},
		stacked: false,
		scales: {
			y: {
				display: false,
				ticks: {
					beginAtZero: true,
				},
			},
			x: {
				display: false,
			},
		},
	};

	const data = {
		labels,
		datasets: [
			{
				data: [15, 17, 19, 22, 25, 28, 30, 29, 26, 22, 19, 16],
				yAxisID: 'y',
				backgroundColor: '#fb2c36',
				borderColor: '#fb2c36',
				pointBackgroundColor: 'transparent',
				pointBorderColor: 'transparent',
				tension: 0.4,
			},
			{
				data: [30, 25, 20, 10, 5, 5, 10, 15, 20, 40, 50, 35],
				backgroundColor: '#155dfc',
				borderColor: '#155dfc',
				pointBackgroundColor: 'transparent',
				pointBorderColor: 'transparent',
				tension: 0.4,
			},
		],
	};

	function ChartHover({ rain, temp }) {
		return (
			<div className='flex flex-col mt-auto'>
				<Line options={options} data={data} />
				<div className='flex flex-1 justify-around bottom-0 absolute w-full h-60 text-center text-xs'>
					{rain.map((perc, index) => (
						<div
							className='flex-1 bg-linear-to-t from-white to-transparent opacity-0 hover:opacity-60 transition-opacity'
							key={index}
						>
							<p className='pt-10'>
								{perc}% {temp[index]}&deg;
							</p>
						</div>
					))}
				</div>
			</div>
		);
	}

	return (
		<div className='flex flex-col row-span-1 text-white border rounded-2xl backdrop-blur-3xl drop-shadow-2xl overflow-hidden mb-4'>
			<div className='flex flex-col p-3 z-50'>
				<p className='flex-1 underline'>Todays Weather</p>
				<div className='flex pr-2'>
					<span className='block m-1 rounded-full bg-blue-500 h-3 w-3'></span>
					<p className='text-sm'>Rain</p>
				</div>
				<div className='flex'>
					<span className='block m-1 rounded-full bg-red-500 h-3 w-3'></span>
					<p className='text-sm'>Temperature</p>
				</div>
			</div>
			<ChartHover rain={data.datasets[0].data} temp={data.datasets[1].data} />
		</div>
	);
}
