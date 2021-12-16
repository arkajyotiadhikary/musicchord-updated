const Message = (props) => {
    const username = props.chatData._data.username;
    const message = props.chatData.message;
    const message_time = props.chatData._data.time;
    const message_type = props.chatData.type;
    if (message_type !== "serverMessage")
        return (
            <div
                className={
                    message_type === "selfMessage"
                        ? "answer right"
                        : "answer left"
                }
            >
                <div className="avatar">
                    <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        alt="User name"
                    />
                    <div className="status offline"></div>
                </div>
                <div className="name">{username}</div>
                <div className="text">{message}</div>
                <div className="time">{message_time}</div>
            </div>
        );
    else {
        return (
            <div className="answer text-center my-3">
                <div className="text">New user has joined</div>
            </div>
        );
    }
};

export default Message;
