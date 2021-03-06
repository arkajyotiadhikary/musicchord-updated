import { combineReducers } from "redux";
import { user } from "./user";
import { pomodoro_times } from "./pomodoro_times";
import { logedin } from "./logedin";
import { todo } from "./todo";

const rootReducer = combineReducers({
    user,
    pomodoro_times,
    logedin,
    todo,
});

export default rootReducer;
