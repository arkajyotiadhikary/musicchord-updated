import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add_todo } from "../../../../actions/todo";

const InputElement = () => {
    const dispatch = useDispatch();

    const [taskData, setTaskData] = useState({
        task_title: "",
        pomodoro_amt: 0,
        pomodoro_outof: 1,
        task_note: "",
    });

    const handleChange = (e) => {
        setTaskData({
            ...taskData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(add_todo(taskData));
        setTaskData({
            task_title: "",
            pomodoro_amt: 0,
            pomodoro_outof: 1,
            task_note: "",
        });
        e.target.value = "";
    };
    return (
        <div
            id="add-todo-element"
            className="modal fade px-2"
            aria-hidden="true"
            tabIndex="-1"
        >
            <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content">
                    <form className="needs-validation" onSubmit={handleSubmit}>
                        <div className="modal-header form-group bg-light">
                            <h5>Add Task</h5>
                            <button
                                type="button"
                                className="btn btn-sm btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="task-input">
                                <div className="invalid-feedback">
                                    This Can not be empty
                                </div>
                                <input
                                    name="task_title"
                                    value={taskData.task_title}
                                    id="validation1"
                                    autoFocus
                                    className="task-input w-100 form-control"
                                    placeholder="Enter your task"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="est-pomodoro mt-3">
                                <p>Act/Est Pomodoros</p>
                                <div className="d-flex mt-2">
                                    <input
                                        name="pomodoro_amt"
                                        value={taskData.pomodoro_amt}
                                        defaultValue={0}
                                        className="form-control form-control-sm est-input"
                                        type="number"
                                        min="0"
                                        onChange={handleChange}
                                    />
                                    <p className="mx-2">/</p>
                                    <input
                                        name="pomodoro_outof"
                                        value={taskData.pomodoro_outof}
                                        defaultValue={1}
                                        className="form-control form-control-sm est-input"
                                        type="number"
                                        min="0"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="task-note mt-3">
                                <p>Task note</p>
                                <textarea
                                    name="task_note"
                                    value={taskData.task_note}
                                    style={{ resize: "none" }}
                                    className="form-control mt-2"
                                    rows="5"
                                    cols="60"
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                        </div>
                        <div className="modal-footer border-0">
                            <button
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InputElement;
