import React from "react";

const PlayerDetails = (props) => {
    return (
        <div className="c-player--details">
            <div className="detail-img">
                <img src={props.img_src} alt="" height="100" width="250" />
            </div>
            <h3 className="detail-title ">
                {props.title !== null ? props.title : "No song is playi"}
            </h3>
            <h3 className="detail-artist"> {props.artist} </h3>
        </div>
    );
};

export default PlayerDetails;
