import React, { useState } from "react";
import "./pomodoro.css";
import Buttons from "./Buttons";
import Timer from "./Timer";

const Pomodoro = () => {
    const [timerWindow, setTimerWindow] = useState("");

    const handleWindow = (value) => {
        setTimerWindow(value);
    };
    return (
        <div className="pomodoro py-5">
            <Buttons handleWindow={handleWindow} />
            <Timer timerWindow={timerWindow} />
        </div>
    );
};

export default Pomodoro;
