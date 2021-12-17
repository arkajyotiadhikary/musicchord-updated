import "./pomodoro.css";
import Buttons from "./Buttons";
import Timer from "./Timer";
const Pomodoro = () => {
    return (
        <div className="pomodoro py-5">
            <Buttons />
            <Timer />
        </div>
    );
};

export default Pomodoro;
