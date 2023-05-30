import React, { useState, useEffect, useRef } from "react";
import message_data from "./message_data";
import Message from "./Message";
import InputPanel from "./InputPanel";
import UserJoinMessage from "./UserJoinMessage";
import User from "./User";
import "./Chat.css";
import { loadUser } from "../../../../apis/auth";
import store from "../../../../store";
import { io } from "socket.io-client";
import { prototype } from "throttle";
const ENDPOINT = "localhost:8000";
// ---
let username;

let SocketClient;

const Chat = () => {
    //States

    const [messages, setMessages] = useState([]);
    const [userList, setUserList] = useState([]);

    const messageListDiv = useRef(null);

    //useEffect Hooks
    const [userDetails, setUserDetails] = useState({ userDetails: {} });

    useEffect(() => {
        const getUserDetails = async () => {
            const loadedUser = await loadUser();
            if (loadedUser) {
                setUserDetails({
                    ...userDetails,
                    userDetails: loadedUser.data.data,
                });
            }
        };

        SocketClient = io(ENDPOINT, {
            transports: ["websocket"],
            withCredentials: true,
            extraHeaders: {
                "my-custom-header": "abcd",
            },
        });
        username = store.getState().user.username;
        console.log("Username", username);
        SocketClient.emit("username", username);
        // User Connection Handler
        SocketClient.on("connection", (data) => {
            setUserList((prevUsers) => [...prevUsers, data]);
            console.log("user-join list", userList);
            getUserDetails();
            handleUserActivity("New user has joined");
        });
        SocketClient.on("disconnection", (data) => {
            setUserList((prevUsers) =>
                prevUsers.filter((user) => user.id !== data)
            );
            handleUserActivity("User left");
        });

        // Message Handler
        const handleClientMessage = (data, username) => {
            const messageData = message_data(
                "clientMessage",
                data.message,
                username,
                "",
                data.time
            );
            setMessages((messages) => [...messages, messageData]);
            handleScroll();
        };

        SocketClient.on("client-message", (data, username) => {
            handleClientMessage(data, username);
            console.log("Client message recived");
        });
        console.log("User List", userList);
    }, []);

    useEffect(() => {
        SocketClient.on("userConnected", (onlineUsers) => {
            setUserList(onlineUsers);
        });

        return () => {
            SocketClient.off("userConnected");
        };
    }, []);

    const handleUserActivity = (message) => {
        const messageData = message_data(
            "serverMessage",
            message,
            "server",
            "",
            ""
        );
        setMessages((msg) => [...msg, messageData]);
    };

    const handleUserMessages = (message, time) => {
        SocketClient.emit("message", {
            message,
            time,
        });

        const messageData = message_data(
            "selfMessage",
            message,
            username,
            "",
            time
        );

        setMessages((messages) => [...messages, messageData]);
        handleScroll();
    };

    const handleScroll = () => {
        messageListDiv.current.scrollIntoView({
            behavior: "smooth",
        });
    };

    //JSX
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-3">
                <div className="d-flex flex-column justify-content-start h-100 bg-light shadow">
                    <h6 className="text-center p-2">Online</h6>
                    <div className="card border-0 online-users bg-light">
                        <div className="card-body p-4">
                            <div className="chat-users text-center">
                                {userList.map((user) => (
                                    <User user={user} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-9">
                <div className="d-flex flex-column justify-content-between h-100">
                    <h6 className="text-center">chat</h6>
                    <div className="card border-0 chat overflow-y-scroll">
                        <div className="card-body chat-body" id="messages">
                            <div className="message-list">
                                {messages?.map((msg) => {
                                    if (msg.type === "server") {
                                        return (
                                            <UserJoinMessage chatData={msg} />
                                        );
                                    } else {
                                        return <Message chatData={msg} />;
                                    }
                                })}
                            </div>
                            <div ref={messageListDiv}></div>
                        </div>
                    </div>
                    <div className="card-footer bg-white border-0">
                        <InputPanel handleUserMessages={handleUserMessages} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
