import { Link } from 'react-router-dom'
import Cards from './Cards'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Meeting() {
	const [conference, setConference] = useState([])

	useEffect(() => {
		const getConference = async () => {
			try {
				const res = await axios.get(
					'http://localhost:4002/conference'
				)
				console.log(res.data)
				setConference(res.data)
			} catch (error) {
				console.log(error)
			}
		}
		getConference()
	}, [])
	return (
		<div className='max-w-screen-2xl container mx-auto md:px-20 px-6'>
			<div className='mt-28 items-center justify-center text-center'>
				<h1 className='text-2xl md:text-4xl'>
					We`re delighted to have you,
					<span className='text-yellow-500'>Here! :)</span>
				</h1>
				<p className='mt-12'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
					laborum quae nulla consectetur eum distinctio sed vitae illo impedit,
					eveniet eaque beatae repellat animi ab quasi, autem odio deleniti amet
					esse accusantium perspiciatis dolore cupiditate cum nam? Eius corporis
					temporibus veniam fugit consequatur vitae vel molestiae, at amet eaque
					mollitia!
				</p>
				<Link to='/'>
					<button className='mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 duration-300'>
						Back
					</button>
				</Link>
			</div>
			<div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{conference.map(item => (
					<div className='flex justify-center' key={item.id}>
						<Cards item={item} />
					</div>
				))}
			</div>
		</div>
	)
}

export default Meeting
