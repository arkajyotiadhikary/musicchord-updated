import { USER_SIGNIN } from "./types";

export const user = (username) => {
    return {
        type: USER_SIGNIN,
        payload: {
            username,
        },
    };
};
