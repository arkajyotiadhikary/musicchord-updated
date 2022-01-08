import { useState, useEffect, useRef } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerController from "./PlayerController";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { search_song } from "../../apis/music";
const endpoint = "http://localhost:8000";
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
        updateSong(`${endpoint}/music/${songDetail.songId}`);
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
        setsongDetail((prevState) => ({
            ...prevState,
            songId: _songDetail.songId,
            thumbnail: _songDetail.thumbnail,
            title: _songDetail.title,
            artist: _songDetail.artist,
        }));
        console.log(_songDetail.songId);
    };

    const handlePlay = (e) => {
        e.preventDefault();
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
        <div className="music-player mt-2">
            <form onSubmit={handleSubmit} className="input-group d-flex">
                <input
                    onChange={handleChange}
                    ref={inputField}
                    type="search"
                    id="form1"
                    className="form-control form-control-sm"
                />
                <button
                    type="submit"
                    className="btn btn-sm btn-primary mx-2 col-md-2"
                >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            {/* <div className="playerBackground"></div> */}
            {
                <div className="card border-0 text-center c-player">
                    <div className="card-body">
                        <audio
                            id="music"
                            src={source}
                            ref={audioRef}
                            autoPlay
                        />
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
                    </div>
                </div>
            }
        </div>
    );
};

export default Player;
