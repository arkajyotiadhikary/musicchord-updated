import { io } from "socket.io-client";
const ENDPOINT = "localhost:8000";

const SocketClient = io(
    ENDPOINT + `?userName=${localStorage.getItem("username")}`,
    {
        transports: ["websocket"],
        withCredentials: true,
        extraHeaders: {
            "my-custom-header": "abcd",
        },
    }
);

export default SocketClient;
