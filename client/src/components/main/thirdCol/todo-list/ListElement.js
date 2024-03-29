import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const ListElement = (props) => {
    const {
        details: { task_title, pomodoro_amt, pomodoro_outof },
        deleteItems,
        index,
    } = props;

    return (
        <div className=" py-2 my-2 border shadow-sm">
            <div className="d-flex justify-content-start align-items-center ">
                <input className="m-2 form-check-input" type="checkbox" />
                <p className="task-title font-monospace text-break bg-light p-1">
                    {task_title}
                </p>
                <div>
                    <p>
                        {pomodoro_amt}/{pomodoro_outof}
                    </p>
                </div>
                <button
                    type="button"
                    className="btn btn-sm text-danger"
                    onClick={() => deleteItems(index)}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
};
export default ListElement;
