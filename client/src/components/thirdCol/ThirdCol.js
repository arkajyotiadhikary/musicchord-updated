// TODO
// the pomodoro watch has crossed the desired height

import Pomodoro from "./stopwatch/Pomodoro";
import TimerSetting from "./stopwatch/TimerSetting";
import TodoList from "./todo-list/TodoList";
import "./ThirdCol.css";
const ThirdCol = () => {
    return (
        <div className="third-col d-flex flex-column">
            <div className="pomodoro-header d-flex justify-content-between align-items-center">
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
            <TodoList />
        </div>
    );
};

export default ThirdCol;
