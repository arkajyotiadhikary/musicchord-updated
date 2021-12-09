import React from "react";

const PlayerDetails = (props) => {
    return (
        <div className="c-player--details">
            <div className="detail-img">
                <img src={props.img_src} alt="" />
            </div>
            <h3 className="detail-title ">{props.title}</h3>
            <h3 className="detail-artist">{props.artist}</h3>
        </div>
    );
};

export default PlayerDetails;
