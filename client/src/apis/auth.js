import axios from "axios";

const endpoint = "http://localhost:8000";

// FIXME
const signUp = async (formData, history) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const registeredUser = await axios.post(
            `${endpoint}/auth/signup`,
            formData,
            config
        );
        history.push("/signin");
    } catch (error) {
        console.log("Error", error.response);
        const err = error.response;
        if (err.status === 400) {
            console.log("Error Message", err.data.msg);
        }
    }
};

// FIXME
const signIn = async (formData, history) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const signInDetails = await axios.post(
            `${endpoint}/auth/signin`,
            formData,
            config
        );

        console.log("Sign In Details", signInDetails);

        localStorage.setItem("token", signInDetails.data.token);
        localStorage.setItem("username", signInDetails.data.username);
        history.push("/main");
    } catch (error) {
        const err = error.response;
        if (err.status === 400) {
            console.log("Error Message", err.data.msg);
        }
        console.log("Error", err);
    }
};

// FIXME Cross-Origin Prob
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
        const signInDetails = await axios.post(
            `${endpoint}/auth/loaduser`,
            body,
            config
        );
        console.log("Load User Details", signInDetails);

        return signInDetails;
    } catch (error) {
        console.log("Error", error.response);
        // TODO wrong in err
        const err = error.response;
        if (err.status === 400) {
            console.log("Error Message", err.data.msg);
        }
        console.log("Error", error);
        return false;
    }
};

// const setSession = async (type) => {
//     const token = localStorage.getItem("token");

//     const config = {
//         headers: {
//             "Content-Type": "application/json",
//         },
//     };

//     const body = {
//         token,
//         type,
//         sessionID: sessionStorage.sessionID,
//     };

//     try {
//         const cookieDetails = await axios.post(
//             `${endpoint}/auth/session`,
//             body,
//             config
//         );
//         const { sessionID, chatRoom } = cookieDetails.data.data;

//         //NOTE Storing in session storage (for each tab session storage is unique)
//         sessionStorage.sessionID = sessionID;

//         //NOTE Store the chat room arr in local storage
//         localStorage.setItem("chatRoom", JSON.stringify(chatRoom));
//     } catch (error) {
//         console.log(error.response);
//         // TODO wrong in err
//         const err = error.response;
//         if (err.status === 400) {
//             console.log(err.data.msg);
//         }
//         console.log(error);
//         return false;
//     }
// };

export { signUp, signIn, loadUser };
