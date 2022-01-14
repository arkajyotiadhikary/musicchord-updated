// TODO
// You can not pick number above 60 in time settings

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import pomodoro_times from "../../../actions/pomodoro_times";

const TimerSetting = () => {
    const dispatch = useDispatch();
    const [timeState, setTimeState] = useState({
        pomodoro_time: 25,
        break_time: 5,
        long_break_time: 15,
    });

    const handleChange = (e) => {
        setTimeState({
            ...timeState,
            [e.target.name]: parseInt(e.target.value),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(pomodoro_times(timeState));
    };

    const { pomodoro_time, break_time, long_break_time } = timeState;

    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Timer Settings
                            </h5>
                            <button
                                type="button"
                                className="btn btn-sm btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            {/* Header */}
                            <div className="timer-minutes mt-3">
                                <h5>Time (minutes)</h5>
                            </div>

                            {/* Minues Inputes */}
                            <div className="timer-inputes d-flex justify-content-center align-items-center my-4">
                                <div>
                                    <label
                                        className="text-center"
                                        htmlFor="pomodoro-setting-input-pomodoro"
                                    >
                                        Pomodoro
                                    </label>
                                    <input
                                        id="pomodoro-setting-input-pomodoro"
                                        className="pomodoro-setting-input text-center"
                                        name="pomodoro_time"
                                        value={pomodoro_time}
                                        type="number"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        className="text-center"
                                        htmlFor="pomodoro-setting-input-break"
                                    >
                                        Break
                                    </label>
                                    <input
                                        id="pomodoro-setting-input-break"
                                        className="pomodoro-setting-input text-center"
                                        name="break_time"
                                        value={break_time}
                                        type="number"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        className="text-center"
                                        htmlFor="pomodoro-setting-input-long-break"
                                    >
                                        Long Break
                                    </label>
                                    <input
                                        id="pomodoro-setting-input-long-break"
                                        className="pomodoro-setting-input text-center"
                                        name="long_break_time"
                                        value={long_break_time}
                                        type="number"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Auto start */}
                            <div className="auto-start my-4">
                                <div className="auto-start-break d-flex justify-content-between align-items-center">
                                    <p>Auto Start Break?</p>
                                    <input type="checkbox" />
                                </div>
                                <div className="auto-start-pomodoro d-flex justify-content-between align-items-center mt-2">
                                    <p>Auto Start Pomodoro?</p>
                                    <input type="checkbox" />
                                </div>
                            </div>

                            {/* Long Break Interval */}
                            <div className="long-break-interval d-flex justify-content-between align-items-center">
                                <p>Long Break Interval</p>
                                <input
                                    className="internval-input pomodoro-setting-input text-center"
                                    value="4"
                                    type="number"
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                            >
                                Save changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TimerSetting;
