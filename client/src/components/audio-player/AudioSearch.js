// TODO
// set Audio Source and Store it in Redux store

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { search_song } from "../../apis/music";
import audio_search from "../../actions/audio_search";

const endpoint = "http://localhost:8000";

const AudioSearch = () => {
    const dispatch = useDispatch();

    const [input, setInput] = useState("");
    const [songDetails, setSongDetails] = useState({
        song_id: "",
        thumbnail: "",
        title: "",
        source: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const searchedSongDetails = await search_song(input);
        setSongDetails({
            ...songDetails,
            song_id: searchedSongDetails.songId,
            thumbnail: searchedSongDetails.thumbnail,
            title: searchedSongDetails.title,
            source: `${endpoint}/music/${searchedSongDetails.songId}`,
        });
    };

    useEffect(() => {
        dispatch(audio_search(songDetails));
    }, [songDetails]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    // update song

    return (
        <div className="audio-search-input">
            <form className="input-group" onSubmit={handleSubmit}>
                <input
                    className="form-control form-control-sm"
                    onChange={handleChange}
                />
                <button type="submit" className="btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </div>
    );
};

export default AudioSearch;
