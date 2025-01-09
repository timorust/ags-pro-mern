import Registration from "../model/registration.model.js"
import { sendRegistrationEmail } from "../utils/email.js"

export const createRegistration = async (req, res) => {
	try {
		const { firstName, lastName, phone, age, lecture, email } = req.body
		if (!firstName || !lastName || !phone || !age || !lecture || !email) {
			return res.status(400).json({ error: "All fields are required" })
		}

		const newRegistration = new Registration({
			firstName,
			lastName,
			phone,
			age,
			lecture,
			email,
		})

		await newRegistration.save()

		await sendRegistrationEmail({ firstName, lastName, phone, age, lecture, email })

		res.status(201).json({ message: "Registration successful!" })
	} catch (error) {
		console.error("Error creating registration:", error)
		res.status(500).json({ error: "Internal server error" })
	}
}

export const getRegistrations = async (req, res) => {
	try {
		const registrations = await Registration.find()
		res.status(200).json(registrations)
	} catch (error) {
		console.error("Error fetching registrations:", error)
		res.status(500).json({ error: "Internal server error" })
	}
}
