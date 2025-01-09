import mongoose from "mongoose"

const conferenceSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
})
const Conference = mongoose.model("Conference", conferenceSchema)

export default Conference