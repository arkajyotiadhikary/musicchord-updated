import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import AudioSearch from "./AudioSearch";
import "./AudioPlayer.scss";
import AudioControls from "./AudioControls";

const AudioPlayer = () => {
    // For Updating Audio Details
    const details = useSelector((state) => state.audio_search);
    const [songDetails, setSongDetails] = useState({
        source: "",
        thumbnail: "",
        title: "",
    });
    useEffect(() => {
        setSongDetails({
            source: details.source,
            thumbnail: details.thumbnail,
            title: details.title,
        });
    }, [details]);

    // For playing the song
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(songDetails.source));
    const isReady = useRef(false);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            startTimer();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    // For progress bar
    const [trackProgress, setTrackProgress] = useState(0);
    const intervalRef = useRef();
    const { duration } = audioRef.current;
    const currentPercentage = duration
        ? `${(trackProgress / duration) * 100}%`
        : "0%";
    const trackStyling = `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))`;

    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                audioRef.current.pause();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000]);
    };

    const handlePlay = () => {
        console.log("Play btn pressed", isPlaying);
        if (isPlaying) {
            clearInterval(intervalRef.current);
            setIsPlaying(false);
        } else {
            setIsPlaying(true);
            startTimer();
        }
    };

    const onScrub = (value) => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);
    };

    const onScrubEnd = () => {
        // If not already playing, start
        if (!isPlaying) {
            setIsPlaying(true);
        }
        startTimer();
    };
    useEffect(() => {
        audioRef.current.pause();
        audioRef.current = new Audio(songDetails.source);
        setTrackProgress(audioRef.current.currentTime);

        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        } else {
            // Set the isReady ref as true for the next pass
            isReady.current = true;
        }
    }, [songDetails.source]);

    useEffect(() => {
        // Pause and clean up on unmount
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        };
    }, []);
    // render
    return (
        <div className="third-col h-100">
            <AudioSearch />
            <div className="audio-player pt-5">
                <div className="audio-info">
                    <img
                        className="artwork"
                        src={
                            songDetails.thumbnail !== ""
                                ? songDetails.thumbnail
                                : "https://thumbs.dreamstime.com/b/music-doodle-22805291.jpg"
                        }
                    />
                    <div className="title text-center">
                        <h2 className="h5 my-3">{songDetails.title}</h2>
                    </div>
                    <div className="progress d-flex justify-content-center">
                        <input
                            className="w-100"
                            type="range"
                            value={trackProgress}
                            step="1"
                            min="0"
                            max={duration ? duration : `${duration}`}
                            onChange={(e) => onScrub(e.target.value)}
                            onMouseUp={onScrubEnd}
                        />
                    </div>
                </div>
                <AudioControls isPlaying={isPlaying} handlePlay={handlePlay} />
            </div>
        </div>
    );
};

export default AudioPlayer;
