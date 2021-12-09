import { useHistory } from "react-router";
import "./ProfileCard.css";

const ProfileCard = () => {
    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem("token");
        history.push("/signin");
    };

    return (
        <div className="dropdown-item card profile-card">
            <div className="header card-header">
                <img
                    className="img-thumbnail rounded-circle mx-auto d-block w-50 h-50"
                    src="https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg"
                    alt="profile_picture"
                />
                <h1 className="card-title text-center h3">
                    {localStorage.getItem("username")}
                </h1>
                <h2 className="card-tittle text-center h6">User Description</h2>
            </div>
            {/* TODO have to work on overflow wrap */}
            {/* <div className="card-body">
                <p className="card-text">
                    Lorem sed dolores ut labore vero. Sit justo dolor no.Lorem
                    sed dolores ut labore vero. Sit justo dolor no.
                </p>
            </div> */}
            <div className="card-footer bg-transparent">
                <button
                    className="btn btn-sm btn-outline-primary text-end"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
