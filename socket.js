const socketIO = require("socket.io");

const intializeSocket = (server) => {
    const onlineUsers = {};
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
            username: "",
        };

        // store the conencted user to online user map

        socket.on("username", (username) => {
            onlineUsers[socket.id]["username"] = username;
            console.log("Connected with username:", username);
            io.emit("userConnected", Object.values(onlineUsers));
            console.log("online users: ", Object.values(onlineUsers));
        });
        // io.emit("connection", updatedUserList());
        socket.on("message", (data) => {
            socket.broadcast.emit(
                "client-message",
                data,
                socket.handshake.query.userName
            );
        });
        socket.on("create-room", ({ roomName, password }) => {
            console.log("Room Name and Password !! ", roomName, password);
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
};

module.exports = intializeSocket;
