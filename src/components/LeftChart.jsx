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

const options = {
	responsive: true,
	interaction: {
		mode: 'index',
		intersect: false,
	},
	stacked: false,
	scales: {
		y: {
			ticks: {
				color: 'white',
			},
			type: 'linear',
			display: true,
			position: 'left',
		},
		x: {
			ticks: {
				color: 'white',
			},
		},
	},
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
	labels,
	datasets: [
		{
			data: [-5, 12, 23, 7, 34, 45, 11],
			yAxisID: 'y',
			borderColor: 'rgb(255, 99, 132)',
			tension: 0.4,
		},
		{
			data: [29, 3, 18, 20, 4, 15, 42],
			borderColor: 'rgb(53, 162, 235)',
			tension: 0.4,
		},
	],
};

export default function LeftChart() {
	return (
		<div className='row-span-3 p-2 text-white border rounded-2xl backdrop-blur-3xl drop-shadow-2xl'>
			<p>Todays Weather</p>
			<div className='flex justify-baseline'>
				<div className='flex pr-2'>
					<span className='block mt-2 mb-2 rounded-full bg-blue-500 h-3 w-3'></span>
					<p className='text-sm'>Temperature</p>
				</div>
				<div className='flex'>
					<span className='block mt-2 mb-2 rounded-full bg-red-500 h-3 w-3'></span>
					<p className='text-sm'>Rain</p>
				</div>
			</div>
			<Line options={options} data={data} />
		</div>
	);
}
