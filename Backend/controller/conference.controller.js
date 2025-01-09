import Conference from "../model/conference.model.js"

export const getConference = async (req, res) => {
    try {
        const conference = await Conference.find()
        res.status(200).json(conference)
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json(error)
    }
}