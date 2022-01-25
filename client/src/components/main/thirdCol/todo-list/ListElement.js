import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const ListElement = (props) => {
    const { task_title, pomodoro_amt, pomodoro_outof, task_note } =
        props.details;
    return (
        <div className=" py-2 my-2 border shadow-sm">
            <div className="d-flex justify-content-start align-items-center ">
                <input className="m-2" type="checkbox" />
                <p className="task-title font-monospace">{task_title}</p>
                <div>
                    <p>
                        {pomodoro_amt}/{pomodoro_outof}
                    </p>
                </div>
                <button className="btn btn-sm">&#xFE19;</button>
            </div>
        </div>
    );
};
export default ListElement;
