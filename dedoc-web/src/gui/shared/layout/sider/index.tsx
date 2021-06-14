import * as React from "react";
import {Icon, Layout, Menu} from 'antd';
import {useHistory} from "react-router";
import "./Sider.css";

import Logo from "../../../assets/CustomMADE_3.svg";
import {useEffect} from "react";
import {ROUTES} from "../../../../constants/routes";
import {useAuthentication} from "../../contexts/Authentication";
import LogoutButton from "./LogoutButton";

const Sider = () => {
    const history = useHistory();
    const auth = useAuthentication();

    useEffect(() => {
        if (!auth.isAuthorized())
            history.push(ROUTES.SIGN_IN);
    }, [auth.user]);

    return <Layout.Sider className={"sider"}>
        <div className={"sider-logo-wrapper"}>
            <a
                onClick={() => history.push(ROUTES.HOME)}>
                <img className={"logo"} src={Logo} alt={"logo"}/>
            </a>
        </div>
        <div className={"mainmenu-container"}>
	        <Menu 
	          className={"mainmenu"} 
	          mode="vertical"
	          defaultSelectedKeys={['1']}
	          defaultOpenKeys={['sub1']}
	        >
	          <Menu.Item key="1" style={{fontSize: '16px'}} onClick={() => history.push(ROUTES.HOME)}>
	            <Icon type="book" style={{fontSize: '18px'}}/>
	            Projects
	          </Menu.Item>
	          <Menu.Item key="2" style={{fontSize: '16px'}} onClick={() => history.push(ROUTES.MODELS)}>
	            <Icon type="deployment-unit" style={{fontSize: '18px'}}/>
	            Models
	          </Menu.Item>
	        </Menu>
	    </div>
        <div className={"sider-bottom-wrapper"}>
        	<div className={"sider-bottom-block"}>
				<div className={"sider-logo"}>
                	<Icon type="cloud-download" style={{fontSize: '18px' }}/>
				</div>
				<div className={"sider-bottom-text"}>Export Project</div>
			</div>
            <div className={"sider-bottom-block"}>
				<div className={"sider-logo"}>
					<Icon type="setting" style={{fontSize: '18px' }}/>
				</div>
				<div className={"sider-bottom-text"}>Project Settings</div>
			</div>
			<div className={"sider-bottom-block"}>
                <div className={"sider-last-logo"}>
                	<LogoutButton/>
                </div>
                <div className={"sider-bottom-text"}>Log Out</div>
            </div>
        </div>
    </Layout.Sider>
};

export default Sider;