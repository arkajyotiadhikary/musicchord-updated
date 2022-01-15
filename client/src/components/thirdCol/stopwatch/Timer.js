// TODO
// Timer reset

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
    const [reset, setReset] = useState(false);
    const startRef = useRef(null);

    const decrementSec = () => {
        setTimeSec((timeSec) => timeSec - 1);
    };

    useEffect(() => {
        if (timerWindow === "Pomodoro") setpomodoroMin(times.pomodoro_time);
        else if (timerWindow === "Break") setpomodoroMin(times.break_time);
        else setpomodoroMin(times.long_break_time);
        setPlay(false);
    }, [pomodoroMin, timerWindow, times, reset]);

    // SECTION USE-EFFECT

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

    const handleClick = (e) => {
        if (e.target.value === "start_stop") {
            if (!play) {
                setPlay(true);
                clearInterval(startRef.current);
                startRef.current = setInterval(decrementSec, 1000);
            } else {
                setPlay(false);
                clearInterval(startRef.current);
            }
        } else if (e.target.value === "reset") {
            console.log("Reset");
            setPlay(false);
            setReset(true);
            clearInterval(startRef.current);
        }
    };

    return (
        <div className="pomodoro-timer ">
            <div className="time text-center">
                {min >= 10 ? min : `0${min}`}:{sec >= 10 ? sec : `0${sec}`}
            </div>
            <div className="button-stop d-flex justify-content-center text-center w-100">
                <button
                    value="start_stop"
                    className="pomodoro-stop btn btn-sm border-dark mx-2 w-50"
                    onClick={handleClick}
                >
                    {play ? "Stop" : "Start"}
                </button>
                <button
                    value="reset"
                    className="pomodoro-stop btn btn-sm border-dark mx-2 w-50"
                    onClick={handleClick}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Timer;
