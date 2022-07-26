import { USER_SIGNIN } from "../actions/types";
const ini_state = {
    isSignedIn: false,
    username: "",
    about: "",
    email: "",
};

export const user = (state = ini_state, action) => {
    switch (action.type) {
        case USER_SIGNIN:
            return {
                ...state,
                isSignedIn: action.payload.signedin,
                username: action.payload.username,
                about: action.payload.about,
                email: action.payload.email,
            };
        default:
            return state;
    }
};
