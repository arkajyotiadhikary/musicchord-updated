// TODO
// make redux store for searched audio details
//

import React, { useEffect, useState, useRef } from "react";

const AudioPlayer = () => {
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    // audio src will be available in redux store
    const audioRef = useRef(new Audio(audioSrc));
};

export default AudioPlayer;
