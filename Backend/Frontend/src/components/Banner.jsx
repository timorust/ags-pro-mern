import banner from '../assets/banner.png'

function Banner() {
	return (
		<>
			<div className='max-w-screen-2xl container mx-auto md:px-20 px-6 flex flex-col md:flex-row my-10'>
				<div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36'>
					<div className='space-y-8'>
						<h1 className='text-2xl md:text-4xl font-bold'>
							The Azerbaijan Glaucoma Society{' '}
						</h1>
						<p className='text-sm md:text-xl'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
							et totam. Tempora amet atque expedita, quae corrupti totam sed
							pariatur corporis at veniam est voluptas animi!
						</p>
						<label className='input input-bordered flex items-center gap-2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 16 16'
								fill='currentColor'
								className='w-4 h-4 opacity-70'
							>
								<path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
								<path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
							</svg>
							<input type='text' className='grow' placeholder='Email' />
						</label>
					</div>
					<button className='btn mt-6 bg-green-500 text-white hover:bg-green-700'>
						Get Started
					</button>
				</div>
				<div className='order-1 w-full mt-20 md:w-1/2 flex justify-center md:justify-start overflow-hidden mr-10'>
					<img
						src={banner}
						alt='Banner'
						className='
      w-[90%] max-w-[450px] md:w-[550px] md:h-[460px] md:ml-12 
      object-contain rounded-lg
      animate-slideIn
      transition-transform duration-1000 ease-in-out'
					/>
				</div>
			</div>
		</>
	)
}

export default Banner
