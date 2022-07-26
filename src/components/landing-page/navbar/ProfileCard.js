import "./ProfileCard.css";

const ProfileCard = () => {
    return (
        <div className="card profile-card">
            <div className="header card-header">
                <img
                    className="img-thumbnail rounded-circle mx-auto d-block"
                    src="https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg"
                    alt="profile_picture"
                />
                <h1 className="card-title text-center h1">User Name</h1>
                <h2 className="card-tittle text-center h5">User Description</h2>
            </div>
            <div className="card-body">
                <p className="card-text">
                    Lorem sed dolores ut labore vero. Sit justo dolor no.
                </p>
            </div>
        </div>
    );
};

export default ProfileCard;
