import React, { useState } from "react";
import "./pomodoro.css";
import Buttons from "./Buttons";
import Timer from "./Timer";

const Pomodoro = () => {
    const [timerWindow, setTimerWindow] = useState("Pomodoro");

    const [startTimer, setStartTimer] = useState(false);

    const handleWindow = (value) => {
        setTimerWindow(value);
    };
    return (
        <div className="pomodoro py-2">
            <Buttons handleWindow={handleWindow} />
            <Timer
                timerWindow={timerWindow}
                startTimer={startTimer}
                setStartTimer={setStartTimer}
            />
        </div>
    );
};

export default Pomodoro;
