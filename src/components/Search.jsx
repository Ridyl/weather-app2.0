import PropType from 'prop-types';

export default function Search({ sCity, click }) {
	let defaultPlace = 'Search City...';
	return (
		<div className='flex col-span-3'>
			<div className='flex-1 m-auto'>
				<div className='relative'>
					<form>
						<input
							type='search'
							id='search'
							className='block w-full p-2 text-gray-100 border-b border-gray-100 focus:outline-none'
							placeholder={defaultPlace}
							onChange={(e) => sCity(e.target.value)}
							required
						/>
						<button
							type='submit'
							className='absolute end-2.5 bottom-3.5 cursor-pointer'
							onClick={click}
						>
							<svg
								className='w-4 h-4 text-gray-100 dark:text-gray-100'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 20 20'
							>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
								/>
							</svg>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

Search.propTypes = {
	sCity: PropType.func,
	click: PropType.func,
	city: PropType.string,
};
