import mongoose from "mongoose"

const RegistrationSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	age: Number,
	phone: String,
	lecture: String,
	email: { type: String, required: true },
})

export default mongoose.models.Registration ||
	mongoose.model("Registration", RegistrationSchema)
