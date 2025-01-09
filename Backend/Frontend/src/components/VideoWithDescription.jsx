const VideoWithDescription = () => {
	return (
		<div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20 pt-16 dark:bg-slate-800 dark:text-white'>
			<div className='flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-16'>
				<div className='flex-1 md:w-2/3'>
					<div className='aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl'>
						<iframe
							className='w-full h-full'
							src='https://www.youtube.com/embed/dQw4w9WgXcQ'
							title='Video Player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					</div>
				</div>
				<div className='flex-1 md:w-1/3 text-left'>
					<h3 className='text-3xl font-bold mb-6 text-blue-600'>
						Learn About Our Topic
					</h3>
					<p className='text-gray-700 dark:text-gray-300 text-xl leading-relaxed mb-6'>
						This video provides an in-depth explanation of the topic at hand.
						Whether you’re new or experienced, this content is designed to help
						you understand the essentials and improve your skills.
					</p>
					<p className='text-gray-700 dark:text-gray-300 text-xl leading-relaxed mb-20'>
						Watch the video, take notes, and feel free to reach out with any
						questions. We’re here to help you succeed!
					</p>
				</div>
			</div>
		</div>
	)
}

export default VideoWithDescription
