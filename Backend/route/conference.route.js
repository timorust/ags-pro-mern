import express from "express"
import { getConference } from "../controller/conference.controller.js"

const router = express.Router()

router.get("/", getConference)

export default router