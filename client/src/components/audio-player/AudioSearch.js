// TODO
// set redux store

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { search_song } from "../../apis/music";
import audio_search from "../../actions/audio_search";

const AudioSearch = () => {
    const dispatch = useDispatch();

    const [input, setInput] = useState("");
    const [songDetails, setSongDetails] = useState({
        song_id: "",
        thumbnail: "",
        title: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.getElement);
        const searchedSongDetails = await search_song(input);
        setSongDetails({
            ...songDetails,
            song_id: searchedSongDetails.songId,
            thumbnail: searchedSongDetails.thumbnail,
            title: searchedSongDetails.title,
        });
    };

    useEffect(() => {
        dispatch(audio_search(songDetails));
    }, [songDetails]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

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
