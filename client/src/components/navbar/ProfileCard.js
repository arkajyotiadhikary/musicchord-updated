import React, { useHistory } from "react-router";
import { useSelector } from "react-redux";
import "./ProfileCard.css";

const ProfileCard = () => {
    const username = useSelector((state) => state.user.username);

    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem("token");
        history.push("/signin");
    };

    const handleEdit = (e) => {};

    return (
        <div className="profile-menu-content">
            <div className=" card profile-card bg-transparent ">
                <div className="header card-header">
                    <img
                        className="img-thumbnail rounded-circle mx-auto d-block w-50 h-50"
                        src="https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg"
                        alt="profile_picture"
                    />
                    <h1 className="card-title text-center h3">{username}</h1>
                    <h2 className="card-tittle text-center h6">
                        User Description
                    </h2>
                </div>

                <div className="card-footer d-flex align-items-center justify-content-around bg-transparent">
                    <button
                        className="btn btn-sm btn-outline-primary text-end"
                        type="button"
                        className="btn btn-sm btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-profile"
                    >
                        Edit
                    </button>

                    <button
                        className="btn btn-sm btn-outline-primary text-end"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
