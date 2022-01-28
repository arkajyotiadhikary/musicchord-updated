import React, { useState, useEffect, useRef } from "react";
import message_data from "./message_data";
import Message from "./Message";
import InputPanel from "./InputPanel";
import UserJoinMessage from "./UserJoinMessage";
import User from "./User";
import "./Chat.css";
import SocketClient from "../../../socket/SocketClient";
import { loadUser } from "../../../../apis/auth";
// ---

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
        SocketClient.on("connection", (data) => {
            setUserList([...data]);
            console.log("user-join list", userList);
            getUserDetails();
            handleUserActivity("New user has joined");
        });
    }, [userDetails, userList]);

    useEffect(() => {
        SocketClient.on("disconnection", (data) => {
            setUserList([...data]);
            console.log("user-left list", userList);
            handleUserActivity("User left");
        });
    }, [userList]);

    useEffect(() => {
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
    }, []);
    //Handlers

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
            localStorage.getItem("username"),
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
                <div className="d-flex flex-column justify-content-between h-100 bg-light shadow">
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
