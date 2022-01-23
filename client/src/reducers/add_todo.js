import { ADD_TODO } from "../actions/types";

const iniState = {
    task_title: "",
    pomodoro_amt: 0,
    pomodoro_outof: 0,
    task_note: "",
};

export const add_todo = (state = iniState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                task_title: action.payload.task_title,
                pomodoro_amt: action.payload.pomodoro_amt,
                pomodoro_outof: action.payload.pomodoro_outof,
                task_note: action.payload.task_note,
            };
        }
        default:
            return state;
    }
};
