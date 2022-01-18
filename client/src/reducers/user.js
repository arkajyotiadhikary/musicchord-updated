import { USER_SIGNIN } from "../actions/types";
const ini_state = {
    username: "",
    about: "",
    email: "",
};

export const user = (state = ini_state, action) => {
    switch (action.type) {
        case USER_SIGNIN:
            return {
                ...state,
                username: action.payload.username,
                about: action.payload.about,
                email: action.payload.email,
            };
        default:
            return state;
    }
};
