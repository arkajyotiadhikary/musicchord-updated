import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faPause,
    faReply,
    // faBackward,
} from "@fortawesome/free-solid-svg-icons";

const PlayerController = (props) => {
    return (
        <>
            <div className="d-flex justify-content-around align-items-center my-5">
                <div id="slider">
                    <div id="elapsed"></div>
                </div>
            </div>
            <div className="c-player--controls d-flex justify-content-around align-items-center pt-2">
                <button
                    onClick={props.handlePlay}
                    className="btn play-btn d-flex justify-content-center align-items-center"
                >
                    <FontAwesomeIcon
                        icon={props.isPlaying ? faPause : faPlay}
                    />
                </button>
            </div>
        </>
    );
};

export default PlayerController;
