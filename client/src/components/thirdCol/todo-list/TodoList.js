import "./TodoList.scss";
import ListElement from "./ListElement";
import InputElement from "./InputElement";
import { useSelector } from "react-redux";

const TodoList = () => {
    const todo_list = useSelector((state) => state.add_todo);
    return (
        <div className="todo-list">
            Tasks
            <hr className="m-0" />
            <ul className="inserted-elements-list p-0">
                {todo_list.map((item) => (
                    <ListElement details={item} />
                ))}
            </ul>
            <div className="add-button d-flex justify-content-center">
                <button
                    type="button"
                    className="btn btn-sm btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#add-todo-element"
                >
                    Add Task
                </button>
                <InputElement />
            </div>
        </div>
    );
};

export default TodoList;
