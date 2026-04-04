import express from "express"
import { sendMessage } from "../controllers/messageControllers.js"
import isAuthenticated from "../middlewares/isAuthenticated.js"

const router = express.Router()

router.route("/send/:id").post(isAuthenticated, sendMessage)

export default router