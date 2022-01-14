import React from "react";

const PlayerDetails = (props) => {
    console.log("Music Player Thumbnail Image", props.img_src);
    return (
        <div className="c-player--details">
            <div className="detail-img">
                <img
                    src={
                        props.img_src !== ""
                            ? props.img_src
                            : "https://blog.landr.com/wp-content/uploads/2017/12/How-To-Build-Chords-1200x627.png"
                    }
                    alt=""
                />
            </div>
            <h3 className="detail-title ">
                {props.title !== null ? props.title : "No song is playi"}
            </h3>
        </div>
    );
};

export default PlayerDetails;
