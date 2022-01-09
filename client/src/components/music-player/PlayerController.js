import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faPause,
    faReply,
    // faBackward,
} from "@fortawesome/free-solid-svg-icons";

const PlayerController = (props) => {
    const { audioRef, isPlaying, handlePlay, songLoaded } = props;

    const playhead = useRef(null);
    const timeline = useRef(null);

    // console.log(audioRef);

    const [timelineWidth, setTimelineWidth] = useState(0);

    const [duration, setDuration] = useState(0);

    useEffect(() => {
        console.log(audioRef.current.currentTime);
    }, [duration, timelineWidth, audioRef.current.currentTime, props]);

    useEffect(() => {
        setDuration(audioRef.current.duration);
        setTimelineWidth(
            timeline.current.offsetWidth - playhead.current.offsetWidth
        );
    }, []);

    useEffect(() => {
        console.log("Asdasdasdasdasdadasd");
        playhead.current.style.width =
            timelineWidth * (audioRef.current.currentTime / duration) + "px";
    });

    return (
        <>
            <div className="d-flex justify-content-around align-items-center my-5">
                <div id="slider" ref={timeline}>
                    <div id="elapsed" ref={playhead}></div>
                </div>
            </div>
            <div className="c-player--controls d-flex justify-content-around align-items-center pt-2">
                <button
                    onClick={handlePlay}
                    className="btn play-btn d-flex justify-content-center align-items-center"
                >
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>
            </div>
        </>
    );
};

export default PlayerController;
