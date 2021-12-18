import React, { useState } from "react";
import "./pomodoro.css";
import Buttons from "./Buttons";
import Timer from "./Timer";

const Pomodoro = () => {
    const [timerWindow, setTimerWindow] = useState("Pomodoro");
    const [times, setTimes] = useState({
        pomodoro: 25,
        break: 5,
        long_break: 15,
    });

    const [startTimer, setStartTimer] = useState(false);

    const handleWindow = (value) => {
        setTimerWindow(value);
    };
    return (
        <div className="pomodoro py-5">
            <Buttons handleWindow={handleWindow} />
            <Timer
                timerWindow={timerWindow}
                times={times}
                startTimer={startTimer}
                setStartTimer={setStartTimer}
            />
        </div>
    );
};

export default Pomodoro;
