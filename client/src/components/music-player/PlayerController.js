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
        <div className="c-player--controls">
            <div id="volume">
                <input
                    className="form-range "
                    type="range"
                    min={0}
                    max={1}
                    step={0.02}
                    onChange={(e) => {
                        props.handleVol(e.target.value);
                    }}
                />
            </div>
            <button onClick={props.handlePlay} className="btn play-btn">
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            <button
                className={`btn ${
                    props.isLoop ? "text-primary" : "text-secondary"
                } skip-btn`}
                onClick={props.handleLoop}
            >
                <FontAwesomeIcon icon={faReply} />
            </button>
        </div>
    );
};

export default PlayerController;
