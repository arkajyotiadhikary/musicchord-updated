// TODO
//  usernames for all the messages
// update the list whenever a user loged in

import React, { useState, useEffect, useRef } from "react";
import message_data from "./message_data";
import Message from "./Message";
import InputPanel from "./InputPanel";
import UserJoinMessage from "./UserJoinMessage";
import User from "./User";
import "./Chat.css";
import SocketClient from "../../../socket/SocketClient";
import { useSelector } from "react-redux";
// ---

const Chat = () => {
    // $ message list state
    const [messages, setMessages] = useState([]);
    // $ online user list state
    const [userList, setUserList] = useState([]);

    const messageListDiv = useRef(null);

    // $ username for the me_user
    const meUsername = useSelector((state) => state.user.username);

    // # UPDATING_USER_LIST
    // @ON_CONNECT
    useEffect(() => {
        SocketClient.on("connection", (data) => {
            setUserList([...data]);
            handleUserActivity("New user has joined");
        });
    }, [userList]);
    // @ON_DISCONNECT
    useEffect(() => {
        SocketClient.on("disconnection", (data) => {
            setUserList([...data]);
            handleUserActivity("User left");
        });
    }, [userList]);

    // # HANDALING_CLIENT_MESSAGES
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

    useEffect(() => {}, []);

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

    // HANDLE_USER_MESSAGES
    const handleUserMessage = (message) => {
        // time for the message
        const date = new Date();
        const time = date.getTime();
        const messageData = message_data(
            "selfMessage",
            message,
            meUsername,
            "",
            time
        );
        setMessages((messages) => [...messages, messageData]);
        handleScroll();
        SocketClient.emit("message", {
            message,
            meUsername,
            time,
        });
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
                        <InputPanel handleUserMessages={handleUserMessage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;