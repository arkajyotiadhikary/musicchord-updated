import { POMODORO_SET_TIME } from "./types";
const pomodoro_times = (times) => {
    return {
        type: POMODORO_SET_TIME,
        payload: times,
    };
};

export default pomodoro_times;
