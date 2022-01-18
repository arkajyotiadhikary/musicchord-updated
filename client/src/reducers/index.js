import { combineReducers } from "redux";
import { user } from "./user";
import { pomodoro_times } from "./pomodoro_times";

const rootReducer = combineReducers({
    user,
    pomodoro_times,
});

export default rootReducer;
