import {Button, Icon, Tooltip} from "antd";
import * as React from "react";
import {IconProps} from "antd/lib/icon";

export interface FooterIconButtonProps extends IconProps {
    readyText?: string,
    loadingText?: string,
    loading?: boolean,
}

export const FooterIconButton = (props: FooterIconButtonProps) => {

    if (props.loading) {
        return <Tooltip title={props.loadingText}>
            <span>
                <Icon className={"footer_button"} {...props} type={"loading"}/>
            </span>
        </Tooltip>;
    }

    return <Tooltip title={props.readyText}>
        <span>
            <Icon className={"footer_button"} {...props}/>
        </span>
    </Tooltip>
};