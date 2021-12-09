import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { loadUser } from "../../apis/auth";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Registration.css";

import { signUp } from "../../apis/auth";

const Signup = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
    });

    const { email, username, password } = formData;

    useEffect(() => {
        const getUserDetails = async () => {
            const loadedUser = await loadUser();
            if (loadedUser) {
                history.push("/main");
            }
        };
        getUserDetails();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        signUp(formData, history);

        setFormData({
            ...formData,
            email: "",
            username: "",
            password: "",
        });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-10 col-xl-9 mx-auto">
                    <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-0">
                        <div className="card-img-left d-none d-md-flex"></div>
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-light fs-5">
                                Sign Up
                            </h5>
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingInputUsername"
                                        placeholder="myusername"
                                        required
                                        autoFocus
                                        value={username}
                                        name="username"
                                        onChange={handleChange}
                                    ></input>
                                    <label htmlFor="floatingInputUsername">
                                        Username
                                    </label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInputEmail"
                                        placeholder="name@example.com"
                                        name="email"
                                        value={email}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="floatingInputEmail">
                                        Email address
                                    </label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        value={password}
                                        name="password"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="floatingPassword">
                                        Password
                                    </label>
                                </div>
                                <div className="d-grid mb-2">
                                    <button
                                        className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                                        type="submit"
                                    >
                                        Register
                                    </button>
                                </div>
                                <a
                                    className="d-block text-center mt-2 small"
                                    href="/signin"
                                >
                                    Have an account? Sign In
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
