import React from "react";
import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faRedo
} from "@fortawesome/free-solid-svg-icons";

const PlayerCard = () => {
    return ( <
        div className = "d-flex justify-content-around mt-3 h-50" >
        <
        div className = "player-card-profile-pic" >
        <
        img width = "100rem"
        src = "https://indiater.com/wp-content/uploads/2021/06/Free-Music-Album-Cover-Art-Banner-Photoshop-Template.jpg"
        alt = "" /
        >
        <
        /div> <
        div className = "player-card-profile-control" >
        <
        h1 className = "song-name h3" > Song Name < /h1> <
        div className = "controls d-flex justify-content-around align-items-center" >
        <
        button className = "btn border" >
        <
        FontAwesomeIcon icon = {
            faPlay
        }
        /> <
        /button> <
        button className = "btn border" >
        <
        FontAwesomeIcon icon = {
            faRedo
        }
        /> <
        /button> <
        /div> <
        /div> <
        /div>
    );
};

export default PlayerCard;