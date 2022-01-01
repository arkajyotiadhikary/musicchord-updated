// TODO
//  times not updating from the redux

import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
const Timer = (props) => {
    const { timerWindow } = props;

    const times = useSelector((state) => state.pomodoro_times);

    const [pomodoroMin, setpomodoroMin] = useState(0);
    const [timeSec, setTimeSec] = useState(0);
    const [play, setPlay] = useState(false);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);

    const startRef = useRef(null);

    const handleClick = () => {
        if (!play) {
            setPlay(true);
            clearInterval(startRef.current);
            startRef.current = setInterval(decrementSec, 1000);
        } else {
            setPlay(false);
            clearInterval(startRef.current);
        }
    };

    const decrementSec = () => {
        setTimeSec((timeSec) => timeSec - 1);
    };

    // SECTION USE-EFFECT

    useEffect(() => {
        setPlay(false);
        if (timerWindow === "Pomodoro") setpomodoroMin(times.pomodoro_time);
        else if (timerWindow === "Break") setpomodoroMin(times.break_time);
        else setpomodoroMin(times.long_break_time);
    }, [pomodoroMin, timerWindow, times]);

    useEffect(() => {
        setPlay(false);
        clearInterval(startRef.current);
        setTimeSec(pomodoroMin * 60);
    }, [pomodoroMin]);

    useEffect(() => {
        setSec(
            timeSec -
                Math.floor(timeSec / 3600) * 3600 -
                Math.floor((timeSec - Math.floor(timeSec / 3600) * 3600) / 60) *
                    60
        );
        setMin(Math.floor((timeSec - Math.floor(timeSec / 3600) * 3600) / 60));
    }, [timeSec, timerWindow]);

    // !SECTION

    return (
        <div className="pomodoro-timer ">
            <div className="time text-center">
                {min > 10 ? min : `0${min}`}:{sec > 10 ? sec : `0${sec}`}
            </div>
            <div className="button-stop d-flex justify-content-center text-center w-100">
                <button
                    className="pomodoro-stop btn border-dark w-50"
                    onClick={handleClick}
                >
                    {play ? "Stop" : "Start"}
                </button>
            </div>
        </div>
    );
};

export default Timer;
