// import
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
const radioRoute = require("./router/Radio");

// initialization
dotenv.config();
mongoose.connect(process.env.DATABASE_URI, () => {
    console.log("Database conencted");
});

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// const io = socketIO(server, {
//     cors: {
//         origin: "localhost:3000",
//         methods: ["GET", "POST"],
//         allowedHeaders: ["my-custom-header"],
//         credentials: true,
//     },
// });

// Socket io connection
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

// middlewares
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/music", musicRoutes);
app.use("/radio", radioRoute);

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