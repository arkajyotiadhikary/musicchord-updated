import React, { useState, useEffect } from "react";
import "./TodoList.scss";
import ListElement from "./ListElement";
import InputElement from "./InputElement";
import { useSelector, useDispatch } from "react-redux";
import { remove_todo } from "../../../../actions/todo";

const TodoList = () => {
    const todoListStore = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const [todoList, setTodoList] = useState(todoListStore);

    useEffect(() => {
        setTodoList(todoListStore);
    }, [todoListStore]);

    const deleteItems = (id) => {
        console.log("Id is ", id);
        const updatedTodoList = todoList.filter((item, index) => index !== id);
        setTodoList(updatedTodoList);
        dispatch(remove_todo(updatedTodoList));
    };

    return (
        <div className="todo-list">
            <div className="header fw-bolder py-2">Task</div>
            <hr className="m-0" />
            <ul className="inserted-elements-list p-0">
                {todoList !== null
                    ? todoList.map((item, index) => (
                          <ListElement
                              key={index}
                              index={index}
                              details={item}
                              deleteItems={deleteItems}
                          />
                      ))
                    : ""}
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
