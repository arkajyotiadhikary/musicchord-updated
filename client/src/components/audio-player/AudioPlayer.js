// TODO
// make redux store for searched audio details
//

import React, { useEffect, useState, useRef } from "react";

import AudioSearch from "./AudioSearch";

const AudioPlayer = () => {
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    // audio src will be available in redux store
    // const audioRef = useRef(new Audio(audioSrc));

    return (
        <div className="audio-player">
            <AudioSearch />
        </div>
    );
};

export default AudioPlayer;
