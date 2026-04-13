import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/database.js"
import userRoute from "./routes/userRoute.js"
import messageRoute from "./routes/messageRoute.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import { app, server } from "./socket/socket.js"  // ✅ import app and server from socket.js

dotenv.config()

const PORT = process.env.PORT || 5000

// middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

// routes
app.use("/api/v1/user", userRoute)
app.use("/api/v1/message", messageRoute)

// ✅ use server from socket.js, not a new one
server.listen(PORT, () => {
  connectDB()
  console.log(`Server running on port ${PORT}`)
})