import { useState, useEffect, useRef } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerController from "./PlayerController";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { search_song } from "../../apis/music";

const Player = () => {
    const audioRef = useRef(null);
    const inputField = useRef(null);

    const [source, setSource] = useState("");
    const [inputSong, setInputSong] = useState("");
    const [songDetail, setsongDetail] = useState({
        songId: "",
        thumbnail: "",
        title: "",
        artist: "",
    });
    // const [maxPlayTime, setMaxPlayTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoop, setIsLoop] = useState(false);

    useEffect(() => {
        updateSong(`http://localhost:8000/music/${songDetail.songId}`);
    }, [songDetail.songId]);

    const handleChange = () => {
        setInputSong(inputField.current.value);
    };

    const handleLoop = () => {
        setIsLoop(!isLoop);
        if (isLoop) {
            if (typeof audioRef.current.loop == "boolean") {
                audioRef.current.loop = true;
            } else {
                audioRef.current.addEventListener(
                    "ended",
                    function () {
                        this.currentTime = 0;
                        this.play();
                    },
                    false
                );
            }
            audioRef.current.play();
        }
        return;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const _songDetail = await search_song(inputSong);
        console.log(_songDetail);
        setsongDetail((prevState) => ({
            ...prevState,
            songId: _songDetail.songId,
            thumbnail: _songDetail.thumbnail,
            title: _songDetail.title,
            artist: _songDetail.artist,
        }));
    };

    const handlePlay = () => {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    };

    const handleVol = (volume) => {
        audioRef.current.volume = volume;
    };

    const updateSong = (source) => {
        setSource(source);
        if (audioRef.current) {
            setIsPlaying(true);
            audioRef.current.pause();
            audioRef.current.load();
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="input-group row">
                <div className="form-outline col-10 ">
                    <input
                        onChange={handleChange}
                        ref={inputField}
                        type="search"
                        id="form1"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary ps-1 col-2">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            {/* <div className="playerBackground"></div> */}
            <div className="card border-0 text-center c-player">
                <div className="card-body">
                    <audio src={source} ref={audioRef} autoPlay />
                    <PlayerDetails
                        img_src={songDetail.thumbnail}
                        title={songDetail.title}
                        artist={songDetail.artist}
                    />
                    <PlayerController
                        isPlaying={isPlaying}
                        handlePlay={handlePlay}
                        isLoop={isLoop}
                        handleLoop={handleLoop}
                        handleVol={handleVol}
                    />
                    {/* <div>
                        <input
                            type="range"
                            min={0}
                            max={maxPlayTime}
                            value={audioRef.current.currentTime}
                            className="form-range"
                        ></input>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default Player;
