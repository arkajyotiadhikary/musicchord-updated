import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { loadUser } from "../apis/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const getUserDetails = async () => {
            const loadedUser = await loadUser();
            if (loadedUser) setIsAuth(true);
            else setIsAuth(false);
        };
        getUserDetails();
    }, []);

    console.log(isAuth);

    return (
        <Route
            {...rest}
            component={(props) =>
                isAuth ? <Component {...props} /> : <Redirect to="/signin" />
            }
        />
    );
};
export default PrivateRoute;
