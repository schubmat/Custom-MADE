import * as React from "react";
import {Button, Popover} from "antd";
import {ReactNode} from "react";

export interface GenericPopoverProps {
    content: ReactNode;
}

interface GenericPopoverState {
    isVisible: boolean;
}

class GenericPopover extends React.Component<GenericPopoverProps, GenericPopoverState> {

    constructor(props: any) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

    toggleVisibility = (): void => {
        this.setState({isVisible: !this.state.isVisible});
    };

    render() {
        return <Popover
            content={this.props.content}
            trigger={"click"}
            visible={this.state.isVisible}
            onVisibleChange={visible => this.setState({isVisible: visible})}>
            <Button onClick={this.toggleVisibility}>
                {this.props.children}
            </Button>
        </Popover>
    }
}

export default GenericPopover;