import React from "react";
import { Route, Switch } from "react-router-dom";
// componets
import Main from "../components/main/Main";
import Signup from "../components/signUp/Signup";
import Signin from "../components/signUp/Signin";
import LandingPage from "../components/landing-page/LandingPage";

// Import functions

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/" exact component={LandingPage} />
            <Route path="/main" component={Main} />
        </Switch>
    );
};

export default AppRouter;
