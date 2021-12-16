import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// componets
import Chat from "../components/chat/Chat";
import MusicApp from "../components/music-player/MusicApp";
import WeatherApp from "../components/weather/WeatherApp";
import Main from "../components/main/Main";
import Signup from "../components/signUp/Signup";
import Signin from "../components/signUp/Signin";
import ProfileCard from "../components/navbar/ProfileCard";
import LandingPage from "../components/landing-page/LandingPage";

// Import functions

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/" exact component={LandingPage} />
            <Route path="/chat" component={Chat} />
            <Route path="/weather" component={WeatherApp} />
            <Route path="/ProfileCard" component={ProfileCard} />

            <Route path="/songs" component={MusicApp} />
            <Route exact path="/main" component={Main} />
        </Switch>
    );
};

export default AppRouter;
