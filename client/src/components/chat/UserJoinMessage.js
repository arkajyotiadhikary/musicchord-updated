const UserJoinMessage = ({ chatData }) => {
    const { message, data } = chatData;

    return (
        <div className="userjoinmsg">
            <div className="text">{message}</div>
        </div>
    );
};

export default UserJoinMessage;
