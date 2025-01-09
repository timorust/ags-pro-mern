import Navbar from '../components/Navbar'
import Meeting from '../components/Meeting'
import Footer from '../components/Footer'
import CountdownTimer from '../components/CountdownTimer'

function Meetings() {
	return (
		<>
			<Navbar />
			<CountdownTimer targetDate='2025-03-15T09:00:00' />
			<div className='min-h-screen'>
				<Meeting />
			</div>
			<Footer />
		</>
	)
}

export default Meetings
