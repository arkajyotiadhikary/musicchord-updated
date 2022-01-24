import React, { useEffect, useState, useRef } from "react";
import "./AudioPlayer.scss";
import AudioControls from "./AudioControls";
const audioSrc = "http://ec2.yesstreaming.net:1910/stream";
const AudioPlayer = () => {
    // For playing the song
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(audioSrc));

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        console.log(audioRef.current);
    }, [isPlaying]);

    const handlePlay = () => {
        console.log("Play btn pressed", isPlaying);
        if (isPlaying) {
            setIsPlaying(false);
        } else {
            setIsPlaying(true);
        }
    };

    // VOLUME
    const [volume, setVolume] = useState(0.3);
    useEffect(() => {
        audioRef.current.volume = volume;
        console.log("volume of the audio player is", audioRef.current.volume);
    }, [volume]);

    // render
    return (
        <div className="second-col h-100">
            <div className="audio-player pt-5">
                <AudioControls
                    setVolume={setVolume}
                    isPlaying={isPlaying}
                    handlePlay={handlePlay}
                />
            </div>
        </div>
    );
};

export default AudioPlayer;
