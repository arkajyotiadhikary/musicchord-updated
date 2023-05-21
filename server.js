const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

// Import routes
const authRoutes = require("./router/auth");
const musicRoutes = require("./router/music");

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
const onlineUsers = {};

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
    // adding new online user
    onlineUsers[socket.id] = {
        userID: socket.id,
        username: socket.handshake.query.username,
    };

    // store the conencted user to online user map
    io.emit("userConnected", Object.values(onlineUsers));
    console.log("online users: ", Object.values(onlineUsers));

    // io.emit("connection", updatedUserList());
    socket.on("message", (data) => {
        socket.broadcast.emit(
            "client-message",
            data,
            socket.handshake.query.userName
        );
    });
    socket.on("disconnect", () => {
        // remove users as they left the server
        delete onlineUsers[socket.id];
        io.emit("userConnected", Object.values(onlineUsers));
        // io.emit("disconnection", updatedUserList());
    });
});
// socket io user list000
// const addClientToMap = (socket) => {
//     let userName = socket.handshake.query.userName;
//     console.log(socket.handshake.query);
//     if (!onlineUsers.has(socket.id)) {
//         onlineUsers.set(socket.id, userName);
//     }
// };
const removeClientFromMap = (socketID) => {
    if (onlineUsers.has(socketID)) onlineUsers.delete(socketID);
};
const updatedUserList = () => {
    console.log([...onlineUsers.values()]);
    return [...onlineUsers.values()];
};

// middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/", authRoutes);
app.use("/music", musicRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("./client/build/"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`server is running at ${port}`));
