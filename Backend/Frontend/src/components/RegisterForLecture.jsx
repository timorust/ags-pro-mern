import { useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import Footer from './Footer'
import CountdownTimer from './CountdownTimer'

function RegisterLecture() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		phone: '',
		age: '',
		lecture: '',
		email: '',
	})

	const [isRegistered, setIsRegistered] = useState(false)

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async e => {
		e.preventDefault()

		try {
			await axios.post('http://localhost:4002/registration', formData)
			setIsRegistered(true)
		} catch (error) {
			console.error(
				'Error during registration:',
				error.response || error.message
			)
			alert('Failed to register. Please try again.')
		}
	}

	return (
		<>
			<Navbar />
			<CountdownTimer targetDate='2025-03-15T09:00:00' />
			<div className='max-w-screen-2xl container mx-auto md:px-20 px-6'>
				{isRegistered ? (
					<div className='text-center mt-12'>
						<h2 className='text-2xl text-green-500'>
							Thank you for registering!
						</h2>
						<p>We look forward to seeing you at the lecture.</p>
					</div>
				) : (
					<form onSubmit={handleSubmit} className='mt-12 max-w-lg mx-auto'>
						<div className='mb-6'>
							<label className='block text-left text-gray-700  dark:bg-slate-900 dark:text-green-300'>
								First Name
							</label>
							<input
								type='text'
								name='firstName'
								value={formData.firstName}
								onChange={handleChange}
								className='w-full px-4 py-2 border rounded-md  dark:bg-slate-900 dark:text-white'
								placeholder='Enter your first name'
								required
							/>
						</div>
						<div className='mb-6'>
							<label className='block text-left text-gray-700 dark:bg-slate-900 dark:text-green-300'>
								Last Name
							</label>
							<input
								type='text'
								name='lastName'
								value={formData.lastName}
								onChange={handleChange}
								className='w-full px-4 py-2 border rounded-md  dark:bg-slate-900 dark:text-white'
								placeholder='Enter your last name'
								required
							/>
						</div>
						<div className='mb-6'>
							<label className='block text-left text-gray-700 dark:bg-slate-900 dark:text-green-300'>
								Phone
							</label>
							<input
								type='text'
								name='phone'
								value={formData.phone}
								onChange={handleChange}
								className='w-full px-4 py-2 border rounded-md  dark:bg-slate-900 dark:text-white'
								placeholder='Enter your phone number'
								required
							/>
						</div>
						<div className='mb-6'>
							<label className='block text-left text-gray-700 dark:bg-slate-900 dark:text-green-300'>
								Age
							</label>
							<input
								type='number'
								name='age'
								value={formData.age}
								onChange={handleChange}
								className='w-full px-4 py-2 border rounded-md  dark:bg-slate-900 dark:text-white'
								placeholder='Enter your age'
								required
							/>
						</div>
						<div className='mb-6'>
							<label className='block text-left text-gray-700 dark:bg-slate-900 dark:text-green-300'>
								Expiries Years
							</label>
							<input
								type='text'
								name='lecture'
								value={formData.lecture}
								onChange={handleChange}
								className='w-full px-4 py-2 border rounded-md  dark:bg-slate-900 dark:text-white'
								placeholder='Enter lecture name'
								required
							/>
						</div>
						<div className='mb-6'>
							<label className='block text-left text-gray-700 dark:bg-slate-900 dark:text-green-300'>
								Email
							</label>
							<input
								type='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								className='w-full px-4 py-2 border rounded-md  dark:bg-slate-900 dark:text-white'
								placeholder='Enter your email'
								required
							/>
						</div>
						<button
							type='submit'
							className='w-full bg-green-500 text-white px-4 py-2 rounded-md'
						>
							Register
						</button>
					</form>
				)}
			</div>
			<Footer />
		</>
	)
}

export default RegisterLecture
