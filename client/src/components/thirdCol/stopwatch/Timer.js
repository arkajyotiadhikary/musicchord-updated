import React from "react";
const Timer = (props) => {
    const { timerWindow } = props;
    const { times } = props;
    const { startTimer } = props;
    const { setStartTimer } = props;

    const handleStart = () => {
        setStartTimer(!startTimer);
    };

    return (
        <div className="pomodoro-timer ">
            <div className="time text-center">
                {timerWindow === "Pomodoro"
                    ? `${times.pomodoro}:00`
                    : timerWindow === "Break"
                    ? `${times.break}:00`
                    : `${times.long_break}:00`}
            </div>
            <div className="button-stop d-flex justify-content-center text-center w-100">
                <button
                    className="pomodoro-stop btn border-dark w-50"
                    onClick={handleStart}
                >
                    {startTimer ? "Stop" : "Start"}
                </button>
            </div>
        </div>
    );
};

export default Timer;
