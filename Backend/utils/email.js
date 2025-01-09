import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const EMAIL_HOST = process.env.EMAIL_HOST
const EMAIL_PORT = process.env.EMAIL_PORT
const EMAIL_USER = process.env.EMAIL_USER
const EMAIL_PASS = process.env.EMAIL_PASS

if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS) {
	console.error('Error: Missing required environment variables. Please check your .env file.')
	process.exit(1)
}

const transporter = nodemailer.createTransport({
	host: EMAIL_HOST,
	port: EMAIL_PORT,
	secure: false,
	auth: {
		user: EMAIL_USER,
		pass: EMAIL_PASS,
	},
})

export const sendRegistrationEmail = async (registrationData) => {
	const { firstName, lastName, phone, age, lecture, email } = registrationData

	const message = `New registration received:
   Name: ${firstName} ${lastName}
   Phone: ${phone}
   Age: ${age}
   Lecture: ${lecture}
   Email: ${email}`

	const mailOptions = {
		from: EMAIL_USER,
		to: email,
		subject: 'Registration Confirmation',
		text: message,
	}

	try {
		const info = await transporter.sendMail(mailOptions)
		console.log('Email sent successfully:', info.response)
	} catch (error) {
		console.error('Error sending email:', error)
	}
}
