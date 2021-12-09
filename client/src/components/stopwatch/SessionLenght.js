import React, { useState, useEffect } from "react";

const SessionLenght = (props) => {
    const [sessionLenght, setSessionLenght] = useState(0);

    useEffect(() => {
        props.setTime(sessionLenght);
    }, [sessionLenght]);

    return (
        <div className="col-md-6">
            <div className="text-center">
                <p>Session Lenght</p>
            </div>
            <div className="d-flex justify-content-between counter">
                <div className="">
                    <button
                        onClick={() => {
                            const len =
                                sessionLenght > 0 ? sessionLenght - 1 : 0;
                            setSessionLenght(len);
                        }}
                        className="btn btn-default"
                        id="sessDec"
                    >
                        -
                    </button>
                </div>
                <div className="">
                    <div id="session">{sessionLenght}</div>
                </div>
                <div className="">
                    <button
                        onClick={() => {
                            setSessionLenght(sessionLenght + 1);
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

export default SessionLenght;
