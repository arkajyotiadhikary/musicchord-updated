import { combineReducers } from "redux";
import { user } from "./user";
import { pomodoro_times } from "./pomodoro_times";
import { logedin } from "./logedin";
import { add_todo } from "./add_todo";

const rootReducer = combineReducers({
    user,
    pomodoro_times,
    logedin,
    add_todo,
});

export default rootReducer;
