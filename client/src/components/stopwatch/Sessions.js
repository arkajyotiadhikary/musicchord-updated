import React, { useState, useEffect } from "react";

const Sessions = (props) => {
    return (
        <div className="col-md-6">
            <div className="text-center">
                <p>Sessions</p>
            </div>
            <div className="d-flex justify-content-between counter">
                <div className="">
                    <button
                        onClick={() => {
                            const len =
                                props.sessions > 0 ? props.sessions - 1 : 0;
                            props.setSessions(len);
                        }}
                        className="btn btn-default"
                        id="sessDec"
                    >
                        -
                    </button>
                </div>
                <div className="">
                    <div id="session">{props.sessions}</div>
                </div>
                <div className="">
                    <button
                        onClick={() => {
                            props.setSessions(props.sessions + 1);
                        }}
                        className="btn btn-default"
                        id="sessInc"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sessions;
