import React from "react";

const User = (user) => {
    console.log("user", user);
    return (
        <div className="user mb-4">
            <div className="avatar mx-auto">
                <img
                    className="img-fluid rounded-circle"
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt="User name"
                />
            </div>
            <div className="status off"></div>
            <div className="name"> {user.username} </div>
        </div>
    );
};
export default User;
