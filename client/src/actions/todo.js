import { ADD_TODO, REMOVE_TODO } from "./types";

const add_todo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo,
    };
};

const remove_todo = (todo) => {
    return {
        type: REMOVE_TODO,
        payload: todo,
    };
};

export { add_todo, remove_todo };
