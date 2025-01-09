import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CountdownTimer from './CountdownTimer'

function About() {
	const [textIndex, setTextIndex] = useState(0)
	const [imageIndex, setImageIndex] = useState(0)

	const textContent = [
		'Welcome to our event! We are excited to have you.',
		'Our mission is to bring people together.',
		"Don't forget to check out our gallery!",
		'Stay tuned for more updates about our upcoming events.',
		'Stay tuned for more updates about our upcoming events.',
		'Stay tuned for more updates about our upcoming events.',
		'Stay tuned for more updates about our upcoming events.',
	]

	const images = [
		'/meeting1.jpg',
		'/meeting2.jpg',
		'/meeting1.jpg',
		'/meeting2.jpg',
	]

	useEffect(() => {
		// טעינה מוקדמת של תמונות
		images.forEach(src => {
			const img = new Image()
			img.src = src
		})

		const interval = setInterval(() => {
			setTextIndex(prevIndex => (prevIndex + 1) % textContent.length)
			setImageIndex(prevIndex => (prevIndex + 1) % images.length)
		}, 4000)

		return () => clearInterval(interval)
	}, [textContent.length, images.length])

	return (
		<>
			<Navbar />
			<CountdownTimer />
			<div className='max-w-screen-2xl container mx-auto px-6 md:px-20'>
				{/* כותרת */}
				<div className='text-center mb-12'>
					<h1 className='text-3xl md:text-5xl font-semibold dark:text-white text-black'>
						We`re delighted to have you,
						<span className='text-yellow-500'>Here! :)</span>
					</h1>
				</div>

				{/* תמונה של חתונה עם החלפה חלקה */}
				<div className='relative w-full h-96 mb-12 overflow-hidden rounded-md shadow-lg'>
					{images.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`Image ${index + 1}`}
							className={`absolute w-full h-full object-cover ${
								index === imageIndex ? 'opacity-100' : 'opacity-0'
							}`}
						/>
					))}
				</div>

				{/* רץ טקסט */}
				<div className='bg-gray-100 dark:bg-blue-300 p-4 rounded-md shadow-md mb-12'>
					<div
						className='text-xl dark:text-white text-gray-700 marquee-container'
						style={{
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							width: '100%',
						}}
					>
						<div
							className='marquee-text'
							style={{
								display: 'inline-block',
								paddingLeft: '100%',
								animation: 'marquee 10s linear infinite',
							}}
						>
							{textContent[textIndex]}
						</div>
					</div>
				</div>

				{/* כפתור חזרה */}
				<div className='text-center mt-8'>
					<Link to='/'>
						<button className='bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300'>
							Back
						</button>
					</Link>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default About
