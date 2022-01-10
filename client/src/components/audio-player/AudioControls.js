import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AudioControls = (props) => {
    const { isPlaying } = props;
    return (
        <div className="audio-controls d-flex justify-content-center text-center">
            <button className="btn btn-primary my-5" type="button">
                <FontAwesomeIcon icon={isPlaying ? faPause : faPause} />
            </button>
        </div>
    );
};

export default AudioControls;
