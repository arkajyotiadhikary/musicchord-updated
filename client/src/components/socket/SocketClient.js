import { io } from "socket.io-client";

const SocketClient = io(`/`, {
    transports: ["websocket"],
    withCredentials: true,
    extraHeaders: {
        "my-custom-header": "abcd",
    },
});

export default SocketClient;
