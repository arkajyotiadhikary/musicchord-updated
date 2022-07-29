import React from "react";
import { Switch } from "react-router-dom";
// componets
import Main from "../components/main/Main";
import Signup from "../components/signUp/Signup";
import Signin from "../components/signUp/Signin";
import LandingPage from "../components/landing-page/LandingPage";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
    return (
        <Switch>
            <PublicRoute
                restricted={false}
                component={LandingPage}
                path="/"
                exact
            />
            <PublicRoute restricted={true} component={Signin} path="/signin" />
            <PublicRoute restricted={true} component={Signup} path="/signup" />

            <PrivateRoute component={Main} path="/main" exact />
        </Switch>
    );
};

export default AppRouter;
