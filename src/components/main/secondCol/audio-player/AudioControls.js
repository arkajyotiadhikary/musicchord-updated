import {
    faPlay,
    faPause,
    faVolumeDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AudioControls = (props) => {
    const { isPlaying, handlePlay, setVolume } = props;

    const handleChange = (e) => {
        setVolume(e.target.value);
        console.log("set volume is ", e.target.value);
    };

    return (
        <div className="audio-controls d-flex justify-content-around  align-items-center px-3">
            <div className="d-flex align-items-center justify-content-around my-3">
                <FontAwesomeIcon
                    className="text-white me-2"
                    icon={faVolumeDown}
                />
                <input
                    type="range"
                    defaultValue={0.3}
                    step={0.01}
                    min={0}
                    max={1}
                    onChange={handleChange}
                />
            </div>
            <button
                className="btn btn-sm btn-primary my-3"
                type="button"
                onClick={handlePlay}
            >
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </button>
        </div>
    );
};

export default AudioControls;
