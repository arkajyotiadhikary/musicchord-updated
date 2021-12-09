// import
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const authRoutes = require("./Router/Auth");
const musicRoutes = require("./Router/Music");

// initialization
dotenv.config();
mongoose.connect(process.env.DATABASE_URI, () => {
    console.log("Database conencted");
});

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
    },
});

// Socket io connection
const userSocketIdMap = new Map();
let userList = [];

// add new user to the user list
const addClientToMap = (userName, socketId) => {
    if (!userSocketIdMap.has(socketId)) {
        userSocketIdMap.set(socketId, userName);
    }
};

// remove user from the user list
const removeClientFromMap = (socketID) => {
    if (userSocketIdMap.has(socketID)) {
        userSocketIdMap.delete(socketID);
    }
};

io.on("connection", (socket) => {
    let userName = socket.handshake.query.userName;
    addClientToMap(userName, socket.id);
    userList = [...userSocketIdMap.values()];
    io.emit("connection", userList);

    socket.on("message", (data) => {
        socket.broadcast.emit("client-message", data);
    });
    socket.on("disconnect", () => {
        removeClientFromMap(socket.id);
        console.log("User List ", userSocketIdMap);
        io.emit("disconnection", userList);
    });
});

// middlewares
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/music", musicRoutes);

// NOTE heroku deploy
if (process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`server is running at ${port}`));
