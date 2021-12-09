const USER_REDUCER = (state = [], action) => {
    switch (action.type) {
        case "LOGIN_USER":
            if (state.length !== 0) {
                state.push();
            }

        default:
            return state;
    }
};

export default USER_REDUCER;
