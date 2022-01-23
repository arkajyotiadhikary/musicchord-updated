import { USER_SIGNIN } from "./types";
const user = (data) => {
    const { username, about, email, signedin } = data;
    return {
        type: USER_SIGNIN,
        payload: {
            signedin,
            username,
            about,
            email,
        },
    };
};

export default user;
