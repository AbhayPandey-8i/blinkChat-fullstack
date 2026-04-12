import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/database.js"
import userRoute from "./routes/userRoute.js"
import messageRoute from "./routes/messageRoute.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import http from "http"
import { Server } from "socket.io"

dotenv.config()

const app = express()

// ✅ DEFINE PORT HERE
const PORT = process.env.PORT || 5000

const server = http.createServer(app)

// socket setup
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true
  }
})

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

// socket connection
io.on("connection", (socket) => {
  console.log("User connected:", socket.id)
})

// ✅ USE server.listen
server.listen(PORT, () => {
  connectDB()
  console.log(`Server running on port ${PORT}`)
})