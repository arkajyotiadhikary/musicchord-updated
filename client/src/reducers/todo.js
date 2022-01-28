import { ADD_TODO, REMOVE_TODO } from "../actions/types";

const iniState = [];

export const todo = (state = iniState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [
                ...state,
                {
                    task_title: action.payload.task_title,
                    pomodoro_amt: action.payload.pomodoro_amt,
                    pomodoro_outof: action.payload.pomodoro_outof,
                    task_note: action.payload.task_note,
                },
            ];
        }
        case REMOVE_TODO: {
            return [...action.payload];
        }
        default:
            return state;
    }
};
