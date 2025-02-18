export default function Header() {
	return (
		<div className='flex col-span-3'>
			<div className='flex-1 m-auto'>
				<div className='relative'>
					<input
						type='search'
						id='search'
						className='block w-full p-2 text-gray-100 border-b border-gray-100 focus:outline-none'
						placeholder='Search City...'
						required
					/>
					<button
						type='submit'
						className='absolute end-2.5 bottom-3.5 cursor-pointer'
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
				</div>
			</div>
		</div>
	);
}
