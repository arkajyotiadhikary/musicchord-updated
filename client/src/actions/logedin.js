import { USER_SIGNIN } from "./types";

const logedin = (logedin) => {
    return {
        type: USER_SIGNIN,
        payload: logedin,
    };
};

export default logedin;
