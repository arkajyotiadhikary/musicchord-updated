import { USER_SIGNIN } from "./types";
const user = (data) => {
    const { username, about, email } = data;
    return {
        type: USER_SIGNIN,
        payload: {
            username,
            about,
            email,
        },
    };
};

export default user;
