import {Button, Tooltip} from "antd";
import * as React from "react";
import {ButtonProps} from "antd/lib/button";

const ActionButton = ({readyText, loadingText, loading, ...buttonProps}: {readyText: string, loadingText: string, loading: boolean} & ButtonProps) => {

    return <Tooltip title={loading ? loadingText : readyText}>
        <span><Button {...buttonProps}
            loading={loading}/>
        </span>
    </Tooltip>
};

export default ActionButton;