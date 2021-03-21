import * as React from "react";
import {Divider, Icon, Layout, Upload} from 'antd'
import {RcFile} from "antd/lib/upload";

export interface FooterProps {
    addIcon?: () => void;
    saveIcon?: () => void;
    garbageIcon?: () => void;
    uploadIcon? : {
        accept: string,
        onUpload: (files: RcFile[]) => Promise<void>
    }
}

interface FooterState {
    uploadList: RcFile[];
    isUploading: boolean;
}

class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: any) {
        super(props);
        this.state = {uploadList: [], isUploading: false}
    }

    private beforeUpload = (file: RcFile, files: RcFile[]): boolean => {
        if (!this.props.uploadIcon)
            return false;
        this.setState({uploadList: files});
        return true;
    };

    private handleUpload = () => {
        if (this.state.isUploading)
            return;
        if (!this.props.uploadIcon)
            return;
        const {uploadList} = this.state;
        this.setState({isUploading: true, uploadList: []});
        this.props.uploadIcon.onUpload(uploadList)
            .finally(() => this.setState({isUploading: false}));
    };

    render() {
        const {addIcon, saveIcon, garbageIcon, uploadIcon} = this.props;
        return (
            <Layout.Footer style={{
                position: 'fixed',
                bottom: 0
                }}>
                <Icon type="plus-circle" onClick={() => addIcon && addIcon()} style={{fontSize: '18px', opacity: 5, color: '#7e7c79' }}/>
                <Divider type={"vertical"}/>
                <Icon type="save" onClick={() => saveIcon && saveIcon()} style={{fontSize: '18px', color: '#7e7c79' }}/>
                <Divider type={"vertical"}/>
                <Icon type="delete" onClick={() => garbageIcon && garbageIcon()} style={{fontSize: '18px', color: '#7e7c79' }}/>
                <Divider type={"vertical"}/>
                <Upload disabled={!uploadIcon}
                        name={"files"}
                        showUploadList={false}
                        multiple={true}
                        beforeUpload={this.beforeUpload}
                        customRequest={this.handleUpload}>
                    <Icon type="upload" style={{fontSize: '18px', color: '#7e7c79' }} />
                </Upload>
            </Layout.Footer>
            );
        }
};

export default Footer;