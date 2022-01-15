const InputElement = () => {
    return (
        <div
            id="add-todo-element"
            className="modal fade"
            aria-hidden="true"
            tabIndex="-1"
        >
            <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content">
                    <form>
                        <div className="modal-header">
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
                                    className="task-input w-100"
                                    placeholder="Enter your task"
                                />
                            </div>
                            <div className="est-pomodoro">
                                <p>Act/Est Pomodoros</p>
                                <input className="" type="number" />/
                                <input className="" type="number" />
                            </div>
                            <div className="task-note">
                                <p>Task note</p>
                                <textarea
                                    rows="5"
                                    cols="60"
                                    name="description"
                                ></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                            >
                                Save
                            </button>
                            <button
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InputElement;
