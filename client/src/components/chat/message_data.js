const message_data = (type, message, username, profilePic = "", time) => {
    return {
        type,
        message,
        _data: {
            username,
            profilePic,
            time,
        },
    };
};

export default message_data;
