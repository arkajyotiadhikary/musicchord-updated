import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const PlayerCard = () => {
    return (
        <div className="d-flex justify-content-between mt-3 h-50">
            <div className="player-card-profile-pic">
                <img
                    width="200rem"
                    src="https://indiater.com/wp-content/uploads/2021/06/Free-Music-Album-Cover-Art-Banner-Photoshop-Template.jpg"
                    alt=""
                />
            </div>
            <div className="player-card-profile-control">
                <div className="controls d-flex">
                    <button className="btn">
                        <FontAwesomeIcon icon={faPlay} />
                        <FontAwesomeIcon icon={faPlay} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
