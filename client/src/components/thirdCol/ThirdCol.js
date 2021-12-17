import Pomodoro from "./stopwatch/Pomodoro";
import TimerSetting from "./stopwatch/TimerSetting";
const ThirdCol = () => {
    return (
        <div className="d-flex flex-column justify-content-between align-items-between">
            <div className="pomodoro-header d-flex justify-content-between px-5 mt-3 align-items-center">
                <h1>Pomodoro</h1>
                <button
                    type="button"
                    className="btn border-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    Setting
                </button>
                <TimerSetting />
            </div>

            <Pomodoro />
        </div>
    );
};

export default ThirdCol;
