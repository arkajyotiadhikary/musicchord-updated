// TODO
// have to add localhost port its wont work without port if its run in localhost
// test in on heroku host

import axios from "axios";
import store from "../store";
import user from "../actions/user";
import logedin from "../actions/logedin";
const endpoint = "http://localhost:8000";

// variables

let signInDetails;

const signUp = async (formData, history) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        await axios.post(`${endpoint}/signup`, formData, config);
        history.push("/signin");
    } catch (error) {
        console.log("Error", error.response);
        const err = error.response;
        if (err.status === 400) {
            console.log("Error Message", err.data.msg);
        }
    }
};

const signIn = async (formData, history) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        if (process.env.NODE_ENV === "production") {
            signInDetails = await axios.post(`/signin`, formData, config);
        } else {
            signInDetails = await axios.post(
                `${endpoint}/signin`,
                formData,
                config
            );
        }
        console.log("sign in details", signInDetails);
        localStorage.setItem("token", signInDetails.data.token);
        history.push("/main");
    } catch (error) {
        const err = error.response;
        if (err.status === 400) {
            console.log("Error Message", err.data.msg);
        }
        console.log("Error", err);
    }
};

const loadUser = async () => {
    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const body = {
        token,
    };

    try {
        signInDetails = await axios.post(`${endpoint}/loaduser`, body, config);
        console.log("Load User Details", signInDetails);
        store.dispatch(user(signInDetails.data));
        return signInDetails;
    } catch (error) {
        console.log("Error", error.response);
        const err = error.response;
        if (err.status === 400) {
            console.log("Error Message", err.data.msg);
        }
        console.log("Error", error);
        return false;
    }
};

export { signUp, signIn, loadUser };
