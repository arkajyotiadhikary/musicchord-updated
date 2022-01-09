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
    const [songLoaded, setSongLoaded] = useState(false);

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
        setSongLoaded(false);
        const _songDetail = await search_song(inputSong);
        setsongDetail((prevState) => ({
            ...prevState,
            songId: _songDetail.songId,
            thumbnail: _songDetail.thumbnail,
            title: _songDetail.title,
            artist: _songDetail.artist,
        }));
    };

    const handlePlay = (e) => {
        e.preventDefault();
        if (isPlaying) {
            setIsPlaying(false);
            audioRef.current.pause();
        } else {
            setIsPlaying(true);
            audioRef.current.play();
        }
    };

    const handleVol = (volume) => {
        audioRef.current.volume = volume;
    };

    const updateSong = (source) => {
        setSource(source);
        if (audioRef.current) {
            audioRef.current.oncanplay = () => {
                setSongLoaded(true);
                setIsPlaying(true);
                setSongLoaded(true);
            };
            audioRef.current.pause();
            audioRef.current.load();
        }
    };

    console.log(songLoaded);

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
            <audio id="music" src={source} ref={audioRef} autoPlay />
            {
                <div className="card border-0 text-center c-player">
                    {songLoaded ? (
                        <div className="card-body">
                            <PlayerDetails
                                img_src={songDetail.thumbnail}
                                title={songDetail.title}
                                artist={songDetail.artist}
                            />
                            <PlayerController
                                audioRef={audioRef}
                                isPlaying={isPlaying}
                                handlePlay={handlePlay}
                                songLoaded={songLoaded}
                                isLoop={isLoop}
                                handleLoop={handleLoop}
                                handleVol={handleVol}
                            />
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            }
        </div>
    );
};

export default Player;
