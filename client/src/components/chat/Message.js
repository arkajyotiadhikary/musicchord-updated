const Message = ({ chatData }) => {
    const { type, message, _data } = chatData;

    return (
        <div className={type === "selfMsg" ? "answer left" : "answer right"}>
            <div className="avatar">
                <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt="User name"
                />
                <div className="status offline"></div>
            </div>
            <div className="name">{_data.username}</div>
            <div className="text">{message}</div>
            {/* <div className="time">5 min ago</div> */}
        </div>
    );
};

export default Message;
