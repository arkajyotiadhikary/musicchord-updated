import { LOGED_IN } from "../actions/types";

const iniState = {
    islogedIn: false,
};

export const logedin = (state = iniState, action) => {
    switch (action.type) {
        case LOGED_IN:
            return { ...state, islogedIn: action.payload };
        default:
            return state;
    }
};
