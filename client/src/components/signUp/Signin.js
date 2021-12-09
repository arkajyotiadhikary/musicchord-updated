import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { loadUser } from "../../apis/auth";
import { signIn } from "../../apis/auth";
import PrivateRoute from "../../router/PrivateRouter";

const Signin = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

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

    const onSubmit = (e) => {
        e.preventDefault();

        signIn(formData, history);

        setFormData({
            ...formData,
            email: "",
            password: "",
        });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-10 col-xl-9 mx-auto">
                    <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-0">
                        <div className="card-img-left d-none d-md-flex">
                            {/* Background Image for card set in CSS */}
                        </div>
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-light fs-5">
                                Sign In
                            </h5>
                            <form onSubmit={onSubmit}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInputUsername"
                                        placeholder="myusername"
                                        required
                                        autoFocus
                                        name="email"
                                        value={email}
                                        onChange={handleChange}
                                    ></input>
                                    <label htmlFor="floatingInputUsername">
                                        Email
                                    </label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        name="password"
                                        value={password}
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
                                        Login
                                    </button>
                                </div>
                                <a
                                    className="d-block text-center mt-2 small"
                                    href="/signup"
                                >
                                    Create an account. Sign Up
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
