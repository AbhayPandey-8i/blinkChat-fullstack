import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        credentials: true,
        methods: ['GET', 'POST'],
    }
});


export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];

    
};
const userSocketMap = {};

io.on('connection', (socket) => {
    console.log("=== USER CONNECTED ===", socket.id);

    const userId = socket.handshake.query.userId;
    console.log("userId:", userId);

    if (userId && userId !== "undefined") {
        socket.userId = userId; // ✅ store on socket
        userSocketMap[userId] = socket.id;
    }

    console.log("userSocketMap:", userSocketMap);
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", (reason) => {
        console.log("=== USER DISCONNECTED ===", socket.id, "reason:", reason);

        if (socket.userId) {
            delete userSocketMap[socket.userId]; // ✅ FIX
        }

        console.log("userSocketMap after disconnect:", userSocketMap);
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export { app, io, server };