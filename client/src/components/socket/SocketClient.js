import { io } from "socket.io-client";
import store from "../../store";
const ENDPOINT = "localhost:8000";

const username = store.getState().user.username;

const SocketClient = io(ENDPOINT + `/main/?userName=${username}`, {
    transports: ["websocket"],
    withCredentials: true,
    extraHeaders: {
        "my-custom-header": "abcd",
    },
});

export default SocketClient;
