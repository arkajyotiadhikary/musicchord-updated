import { useState } from "react";
import Login from "./Signin";

const LoginApp = () => {
    const [user, setUser] = useState({ name: "", email: "" });
    const [error, seterror] = useState("");

    const login = (details) => {
        console.log(details);
    };

    const logout = () => {
        console.log("Logout");
    };

    return (
        <div className="d-flex h-100 align-items-center">
            {user.email !== "" ? (
                <div className="welcome">
                    <h1>Welcome</h1>
                    <button>Logout</button>
                </div>
            ) : (
                <Login login={login} />
            )}
        </div>
    );
};

export default LoginApp;
