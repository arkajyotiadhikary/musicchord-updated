import { combineReducers } from "redux";
import { user } from "./user";
import { pomodoro_times } from "./pomodoro_times";
import { audio_search } from "./audio_search";

const rootReducer = combineReducers({
    user,
    pomodoro_times,
    audio_search,
});

export default rootReducer;
