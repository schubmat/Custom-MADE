import * as React from "react";
import {ReactNode} from "react";
import {Button, Modal} from "antd";

import "./GenericModal.css"

export interface GenericModalProps {
    title: string;
    content: ReactNode;
    centered?: boolean;
    width?: string | number;
    onOpen?: () => void;
}

interface GenericModalState {
    isVisible: boolean;
}

class GenericModal extends React.Component<GenericModalProps, GenericModalState> {

    constructor(props: any) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

    close = () => this.setState({isVisible: false});

    open = () => {
       this.setState({isVisible: true});
       if (this.props.onOpen)
           this.props.onOpen();
    };

    render() {
        return <span>
            <span onClick={this.open} className={"clickable"}>
                {this.props.children}
            </span>
            <Modal
                centered={this.props.centered}
                visible={this.state.isVisible}
                width={this.props.width}
                title={this.props.title}
                onCancel={this.close}
                footer={[/*<Button onClick={this.close}>Close</Button>*/]}
            >
            {this.props.content}
            </Modal>
        </span>
    }
}

export default GenericModal;