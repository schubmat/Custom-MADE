import LogOutButton from "../../assets/exit.png";
import {ROUTES} from "../../constants/routes";
import ImageButton from "../common/ImageButton";
import * as React from "react";
import {useEffect} from "react";
import {Button} from "antd";
import {useAuthentication} from "../../contexts/Authentication";
import {useHistory} from "react-router";

const LogoutButton = () => {
    const history = useHistory();
    const auth = useAuthentication();

    useEffect(() => {
        if (!auth.isAuthorized())
            history.push(ROUTES.SIGN_IN);
    }, [auth.user]);

    return <Button onClick={() => {
        auth.logout();
    }}>Logout<ImageButton style={{"marginLeft": "5px"}} alt={"Log out"} src={LogOutButton}/>
    </Button>
};

export default LogoutButton;