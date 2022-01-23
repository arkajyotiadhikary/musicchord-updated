const InputElement = () => {
    return (
        <div
            id="add-todo-element"
            className="modal fade px-2"
            aria-hidden="true"
            tabIndex="-1"
        >
            <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content">
                    <form>
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
                                <input
                                    className="task-input w-100 form-control"
                                    placeholder="Enter your task"
                                />
                            </div>
                            <div className="est-pomodoro mt-3">
                                <p>Act/Est Pomodoros</p>
                                <div className="d-flex mt-2">
                                    <input
                                        className="form-control form-control-sm est-input"
                                        type="number"
                                        min="0"
                                    />
                                    <p className="mx-2">/</p>
                                    <input
                                        className="form-control form-control-sm est-input"
                                        type="number"
                                        min="0"
                                    />
                                </div>
                            </div>
                            <div className="task-note mt-3">
                                <p>Task note</p>
                                <textarea
                                    className="form-control mt-2"
                                    rows="5"
                                    cols="60"
                                    name="description"
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
