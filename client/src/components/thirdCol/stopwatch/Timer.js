import React from "react";
const Timer = (props) => {
    const { timerWindow } = props;
    return (
        <div className="pomodoro-timer ">
            <div className="time text-center">
                {timerWindow === "Pomodoro"
                    ? "12:00"
                    : timerWindow === "Break"
                    ? "5:00"
                    : "15:00"}
            </div>
            <div className="button-stop d-flex justify-content-center text-center w-100">
                <button className="pomodoro-stop btn border-dark w-50">
                    Stop
                </button>
            </div>
        </div>
    );
};

export default Timer;
