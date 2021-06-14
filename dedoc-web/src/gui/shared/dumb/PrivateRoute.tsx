import React, {Component} from "react";
import {Redirect, Route} from "react-router-dom";
import {ROUTES} from "../../../constants/routes";
import {useAuthentication} from "../contexts/Authentication";

const PrivateRoute = (props: any) => {
    const auth = useAuthentication();
    const {component: Component, ...rest} = props;

    return (
        <Route {...rest} render={props => auth.isAuthorized() ?
            <Component {...props}/>
            : <Redirect to={{pathname: ROUTES.SIGN_IN, state: {from: props.location}}}/>}
        />
    )
};

export default PrivateRoute;