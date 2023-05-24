import React, { useEffect, useRef } from "react";

import _audio from "./music/1.mp3";
import _bg from "./images/bg.jpg";

const AudioViz = () => {
    const audioRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const audioElement = audioRef.current;
        const imageElement = imageRef.current;

        let audioContext = null;
        let analyser = null;

        const initializeAudioContext = () => {
            // Create an AudioContext only once after a user gesture
            audioContext = new (window.AudioContext ||
                window.webkitAudioContext)();
            analyser = audioContext.createAnalyser();
            analyser.fftSize = 256; // Adjust this value to control the audio resolution

            // Connect the audio element to the AnalyserNode
            const source = audioContext.createMediaElementSource(audioElement);
            source.connect(analyser);
            source.connect(audioContext.destination);

            // Create an array to store audio data
            const audioDataArray = new Uint8Array(analyser.frequencyBinCount);

            const updateImageBrightness = () => {
                // Get audio data from the AnalyserNode
                analyser.getByteFrequencyData(audioDataArray);

                // Calculate the average audio level
                const averageLevel =
                    audioDataArray.reduce((sum, value) => sum + value, 0) /
                    audioDataArray.length;

                // Adjust the image brightness based on the audio level
                const brightnessValue = Math.floor((averageLevel / 255) * 100); // Adjust this calculation as needed
                imageElement.style.filter = `brightness(${brightnessValue}%)`;
                // Call this function recursively to continuously update the image brightness
                requestAnimationFrame(updateImageBrightness);
            };

            // Start updating the image brightness
            updateImageBrightness();
        };

        const handleUserGesture = () => {
            // Start the AudioContext only when a user gesture is detected
            if (!audioContext) {
                initializeAudioContext();
            }

            // Play the audio
            audioElement.play();
        };

        // Add event listener to detect user gesture
        document.addEventListener("click", handleUserGesture);

        // Clean up resources when component unmounts
        return () => {
            if (audioContext) {
                audioContext.close();
            }
            document.removeEventListener("click", handleUserGesture);
        };
    }, []);

    return (
        <div>
            <audio ref={audioRef} controls src={_audio} />
            <img ref={imageRef} src={_bg} alt="Image" />
        </div>
    );
};

export default AudioViz;
