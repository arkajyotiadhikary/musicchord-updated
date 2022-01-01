import { POMODORO_SET_TIME } from "../actions/types";
const iniState = {
    pomodoro_time: 25,
    break_time: 5,
    long_break_time: 15,
};

export const pomodoro_times = (state = iniState, action) => {
    const { type, payload } = action;

    switch (type) {
        case POMODORO_SET_TIME: {
            return {
                ...state,
                pomodoro: payload.pomodoroTime,
                break: payload.breakTime,
                long_break: payload.long_breakTime,
            };
        }
        default:
            return state;
    }
};
