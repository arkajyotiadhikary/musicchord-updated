import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const EditProfile = () => {
    // const [userData, setUserData] = useState({
    //     username: "",
    //     about: "",
    //     old_password: "",
    //     password: "",
    // });

    return (
        <div
            id="edit-profile"
            className="modal fade px-2"
            aria-hidden="true"
            tabIndex="-3"
        >
            <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content">
                    <form>
                        <div className="modal-header form-group bg-light">
                            <h5>Edit Profile</h5>
                            <button
                                type="button"
                                className="btn btn-sm btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body ps-5">
                            <div>
                                <label className="input-img d-flex justify-content-center my-3">
                                    <FontAwesomeIcon
                                        className="h1"
                                        icon={faPlusSquare}
                                    />
                                    <input
                                        className="d-none"
                                        type="file"
                                        accept="image/*"
                                    />
                                </label>
                            </div>
                            <div className="update-username">
                                <label className="form-control-label my-2">
                                    Username
                                </label>
                                <input
                                    className="form-control"
                                    name="username"
                                    placeholder="New Username"
                                />
                            </div>
                            <div className="update-description my-3">
                                <label className="form-control-label my-2">
                                    About Me
                                </label>
                                <textarea
                                    className="form-control"
                                    name="about"
                                    placeholder="Tell this server about yourself"
                                />
                            </div>
                            <div className="update-password">
                                <label className="form-control-label my-2">
                                    Old Password
                                </label>
                                <input
                                    type="password"
                                    name="old_password"
                                    className="form-control"
                                    placeholder="Enter the old password "
                                />
                                <label className="form-control-label my-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter New Password "
                                />
                            </div>
                        </div>
                        <div className="modal-footer border-0">
                            <button
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
