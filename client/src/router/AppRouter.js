import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
// componets
import Main from "../components/main/Main";
import Signup from "../components/signUp/Signup";
import Signin from "../components/signUp/Signin";
import LandingPage from "../components/landing-page/LandingPage";
import { loadUser } from "../apis/auth";

const AppRouter = () => {
    const history = useHistory();
    if (localStorage.getItem("token")) {
        loadUser();
    } else {
        history.push("./signin");
    }
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
