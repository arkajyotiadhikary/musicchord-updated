import { ADD_TODO } from "./types";

const add_todo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo,
    };
};

export default add_todo;
