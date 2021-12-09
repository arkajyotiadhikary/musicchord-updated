import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ProfileCard from "./ProfileCard";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand d-flex" href="/home">
                    <img
                        className="mx-2 img-fluid"
                        width="40"
                        src="https://www.shareicon.net/data/512x512/2015/12/06/683326_music_512x512.png"
                        alt="logo"
                    />
                    <h1 className="h3 ms-2">Music Chord</h1>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown  bg-secondary rounded-circle px-1">
                            <a
                                className="nav-link"
                                href="google.com"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <FontAwesomeIcon
                                    className="text-white"
                                    icon={faUser}
                                />
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end py-0 w-55"
                                aria-labelledby="navbarDropdown"
                            >
                                <ProfileCard />
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
