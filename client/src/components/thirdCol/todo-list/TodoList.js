import "./TodoList.scss";
import ListElement from "./ListElement";
import InputElement from "./InputElement";

const TodoList = () => {
    const handleClick = () => {};
    return (
        <div className="todo-list">
            Tasks
            <hr className="m-0" />
            <ul className="inserted-elements-list p-0">
                <ListElement />
                <ListElement />
                <ListElement />
                <ListElement />
                <ListElement />
                <ListElement />
            </ul>
            <div className="add-button d-flex justify-content-center">
                <button
                    type="button"
                    className="btn btn-primary"
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
