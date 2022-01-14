import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AudioControls = (props) => {
    const { isPlaying, handlePlay } = props;
    return (
        <div className="audio-controls d-flex justify-content-center text-center">
            <button
                className="btn btn-sm btn-primary my-5"
                type="button"
                onClick={handlePlay}
            >
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </button>
        </div>
    );
};

export default AudioControls;
