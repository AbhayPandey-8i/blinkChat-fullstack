import express from "express"
import { sendMessage } from "../controllers/messageControllers"

const router = express.Router()

router.route("/send/:id").post(sendMessage)

export default router