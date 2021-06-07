import React, {useContext, useState} from "react";
import {User} from "../../../services/users";
import {withProps} from "./with";
import {restLogin, restSignUp} from "../../../services/rest";

export interface Authentication {
    user: User,
    token: string,
    expiresMillis: number,
    timestamp: Date,
}

export interface MutualAuthentication {
    authentication: Authentication,
    setAuthentication: (auth: Authentication | null) => void,
}

const AuthenticationContext = React.createContext<MutualAuthentication | null>(null);

export const AuthenticationProvider = ({children}: {children: React.ReactNode}) => {
    const [authentication, setAuthentication] = useState<Authentication | null>(null);
    return withProps({children, value: {
            authentication: authentication,
            setAuthentication: (auth: Authentication) => {
                //TODO refactor http and rest to hooks
                localStorage.removeItem("id_token");
                if (auth)
                    localStorage.setItem("id_token", auth.token);
                setAuthentication(auth);
            }}}, AuthenticationContext.Provider);
};

export const useAuthentication = () => {
    const context = useContext(AuthenticationContext);
    if (context == null)
        throw new Error("No AuthenticationProvider");
    const [error, setError] = useState<Error | null>(null);

    const isAuthorized = (): boolean => {
        if (!context || !context.authentication)
            return false;
        const auth = context.authentication;
        const expiresInMillis = new Date(auth.timestamp).getMilliseconds() + auth.expiresMillis;
        const currentMillis = new Date().getMilliseconds();
        return expiresInMillis > currentMillis;
    };

    const login = (username: string, password: string) => {
        restLogin(username, password)
            .then(context.setAuthentication)
            .catch((error: Error) => {
                console.log(error);
                setError(error);});
    };

    const logout = () => {
        //TODO implement in backend
        context.setAuthentication(null);
    };

    const signup = (username: string, password: string, email: string, onSuccess: (user: User) => void) => {
        restSignUp(username, password, email)
            .then(onSuccess)
            .catch(setError);
    };

    return {
        user: isAuthorized() ? context.authentication.user : null,
        isAuthorized: isAuthorized,
        login: login,
        logout: logout,
        signUp: signup,
        error: error,
    }
};