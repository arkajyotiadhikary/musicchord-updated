import { USER_SIGNIN } from "../actions/types";
const ini_state = {
    username: "Arka",
};

export const user = (state = ini_state, action) => {
    switch (action.type) {
        case USER_SIGNIN:
            return { ...ini_state, username: action.payload.username };
        default:
            return state;
    }
};
