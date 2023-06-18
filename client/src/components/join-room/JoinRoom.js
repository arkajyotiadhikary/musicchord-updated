import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { ENDPOINT } from "../../utils/constants";

const JoinRoom = () => {
    const socketClient = io(ENDPOINT, {
        transports: ["websocket"],
        withCredentials: true,
        extraHeaders: {
            "my-custom-header": "abcd",
        },
    });

    const [data, setData] = useState({
        roomName: "",
        password: "",
    });

    const [rooms, setRooms] = useState([]);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const handleCreateRoom = (e) => {
        e.preventDefault();
        socketClient.emit("create-room", data);
    };

    useEffect(() => {
        socketClient.emit("rooms");
    }, []);

    socketClient.on("room-list", (__rooms) => {
        console.log(__rooms);
        console.log("Room List", rooms);
        const _rooms = Object.keys(__rooms);
        if (_rooms !== []) setRooms([..._rooms]);
    });
    socketClient.on("roomCreated", (__rooms) => {
        console.log("Room Created", rooms);
        const _rooms = Object.keys(__rooms);
        if (_rooms !== []) setRooms([..._rooms]);
    });

    return (
        <div className="join-room">
            <div className="form-section">
                <div className="join-room">
                    <h1>Join Room</h1>
                    <div className="form-group">
                        <label>Room Name</label>
                        <input
                            className="form-control"
                            placeholder="Search by Name"
                        ></input>
                    </div>
                    <div className="list-rooms">
                        <p>Rooms</p>
                        <ul>
                            {rooms.map((i) => (
                                <li>{i}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="create-room">
                    <h1>Create Room</h1>
                    <form onSubmit={handleCreateRoom}>
                        <div className="form-group">
                            <label for="room-name">Room Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="roomName"
                                value={data.roomName}
                                id="room-name"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label for="room-password">Room Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                value={data.password}
                                id="room-password"
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinRoom;
