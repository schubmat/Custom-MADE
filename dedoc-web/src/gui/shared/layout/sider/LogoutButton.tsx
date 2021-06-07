import {ROUTES} from "../../../../constants/routes";
import * as React from "react";
import {useEffect} from "react";
import {Icon} from "antd";
import {useAuthentication} from "../../contexts/Authentication";
import {useHistory} from "react-router";

const LogoutButton = () => {
    const history = useHistory();
    const auth = useAuthentication();

    useEffect(() => {
        if (!auth.isAuthorized())
            history.push(ROUTES.SIGN_IN);
    }, [auth.user]);

    return <Icon type="logout"
                 style={{fontSize: '18px', color: '#ffaaaa' }}
                 onClick={() => {
                     auth.logout();
                     history.push(ROUTES.SIGN_IN);}}
    />
};

export default LogoutButton;