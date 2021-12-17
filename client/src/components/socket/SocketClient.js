import { io } from "socket.io-client";

const SocketClient = io(`/?userName=${localStorage.getItem("username")}`, {
    transports: ["websocket"],
    withCredentials: true,
    extraHeaders: {
        "my-custom-header": "abcd",
    },
});

export default SocketClient;
