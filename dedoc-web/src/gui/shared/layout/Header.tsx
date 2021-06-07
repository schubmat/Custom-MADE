import {RouteComponentProps, withRouter} from "react-router";
import {Col, Icon, Input, Layout, Row} from 'antd';
import React from "react";
import "./Header.css";

const Search = Input.Search;

export interface HeaderProps extends RouteComponentProps {
    title: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return <Layout.Header className={"header"}>
        <Row type="flex" justify={"space-between"}>
            <Col span={2}>
                <Icon className={"go-back-icon"} type="arrow-left" onClick={() => props.history.goBack()}/>
            </Col>
            <Col span={8}>
                <div style={{textAlign: "center"}}>
                    {props.title}
                </div>
            </Col>
            <Col span={2}>
                <Search placeholder={"Durchsuchen"}/>
            </Col>
        </Row>
    </Layout.Header>
};

export default withRouter(Header);