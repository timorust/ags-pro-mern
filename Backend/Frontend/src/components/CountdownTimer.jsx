import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const CountdownTimer = ({ targetDate }) => {
	const calculateTimeLeft = () => {
		const difference = new Date(targetDate) - new Date()
		let timeLeft = {}

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			}
		}

		return timeLeft
	}

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft())
		}, 1000)

		return () => clearInterval(timer)
	}, [targetDate])

	return (
		<div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:text-white mt-10 pt-6'>
			<h2 className='text-2xl font-bold mt-4 mb-4 text-center text-gray-800 dark:text-white'>
				Time Until the Congress...
				<br />
				<span className='text-lg text-pink-500 dark:text-pink-600'>
					15|03|2025 at 09:00
				</span>
			</h2>
			<div className='flex justify-center space-x-8'>
				{Object.keys(timeLeft).map(interval => (
					<div key={interval} className='text-center'>
						<span className='text-5xl font-bold text-blue-500'>
							{timeLeft[interval] || 0}
						</span>
						<div className='text-lg text-gray-600 capitalize dark:text-gray-300'>
							{interval}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

// PropTypes validation
CountdownTimer.propTypes = {
	targetDate: PropTypes.string.isRequired,
}

export default CountdownTimer
