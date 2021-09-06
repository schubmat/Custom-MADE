import {Divider, Layout} from "antd";
import * as React from "react";


export const Footer = (props: {children?: React.ReactNode}) => {

    return (
        <Layout.Footer style={{
            position: 'fixed',
            bottom: 0}}>

            {React.Children.toArray(props.children).reduce((prev, child) => {
                return [prev, child, <Divider type={"vertical"}/>];
            }, [])}

        </Layout.Footer>
    );
};