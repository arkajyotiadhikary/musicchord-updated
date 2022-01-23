import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const ListElement = () => {
    return (
        <div className="d-flex justify-content-start align-items-center py-2 my-2 border shadow-sm">
            <input className="m-2" type="checkbox" />
            <p className="task-title">asdasdasd</p>
            <div>
                <p>1/4</p>
            </div>
            <button className="btn btn-sm">&#xFE19;</button>
        </div>
    );
};
export default ListElement;
