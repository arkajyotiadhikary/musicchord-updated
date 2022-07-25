const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// Import routes
const authRoutes = require("./router/Auth");
const musicRoutes = require("./router/Music");

// initialization
dotenv.config();
mongoose.connect(
    process.env.DATABASE_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Database conencted");
    }
);

const app = express();
const server = http.createServer(app);

// ------------------------------------------ socket -----------------------------------------------------
// Socket io connection
const io = socketIO(server, {
    cors: {
        origin: "localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
    },
});
io.on("connection", (socket) => {
    addClientToMap(socket);
    io.emit("connection", updatedUserList());
    socket.on("message", (data) => {
        socket.broadcast.emit(
            "client-message",
            data,
            socket.handshake.query.userName
        );
    });
    socket.on("disconnect", () => {
        removeClientFromMap(socket.id);
        io.emit("disconnection", updatedUserList());
    });
});
// socket io user list000
const userSocketIdMap = new Map();
const addClientToMap = (socket) => {
    let userName = socket.handshake.query.userName;
    if (!userSocketIdMap.has(socket.id)) {
        userSocketIdMap.set(socket.id, userName);
    }
};
const removeClientFromMap = (socketID) => {
    if (userSocketIdMap.has(socketID)) userSocketIdMap.delete(socketID);
};
const updatedUserList = () => {
    return [...userSocketIdMap.values()];
};

// middlewares
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/music", musicRoutes);

const buildPath = path.join(__dirname, "..", "build");
app.use(express.static(buildPath));
const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`server is running at ${port}`));
