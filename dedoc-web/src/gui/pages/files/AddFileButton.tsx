import {FooterIconButton} from "../../shared/layout/footer/FooterIconButton";
import {Button, Input, message, Popover} from "antd";
import * as React from "react";
import {useEffect, useState} from "react";
import {useFullVersion} from "../../shared/contexts/FullProjectVersion";
import Form, {FormComponentProps} from "antd/lib/form";
import {File} from "../../../model/types";

export const AddFileButton = () => {
    const [isCreateFileVisible, setCreateFileVisible] = useState<boolean>(false);
    const {addFile, isLoading} = useAddFile();

    useEffect(() => {
        if (isLoading)
            setCreateFileVisible(false);
    }, [isLoading]);

    const toggleCreateFileForm = () => {
        setCreateFileVisible(!isCreateFileVisible);
    };

    return <Popover
        content={<FileFormComponent addFile={addFile}/>}
        trigger={"click"}
        visible={isCreateFileVisible}
        onVisibleChange={setCreateFileVisible}>
        <FooterIconButton type={"plus-circle"} readyText={"create file"} onClick={toggleCreateFileForm}/>
    </Popover>;
};

const useAddFile = () => {
    const {version, error, getFullTitle} = useFullVersion();
    const [isLoading, setLoading] = useState<boolean>(false);

    const addFile = (values: {name: string},
                     onSuccess: (file: Required<File>) => void,
                     onError: (error: Error) => void) => {
        if (!version || isLoading)
            return;
        const dto = {...values, version: {id: version.id}};
        setLoading(true);
        version.files.add(dto).then(onSuccess).catch(onError).finally(() => setLoading(false));
    };

    return {
        addFile,
        isLoading,
    }
};


interface FileFormProps {
    addFile: (values: {name: string},
              onSuccess: (file: Required<File>) => void,
              onError: (error: Error) => void) => void;
}

class FileForm extends React.Component<FileFormProps & FormComponentProps> {

    private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.addFile(values,
                    file => this.props.form.resetFields(),
                    error => message.error(error.message));
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return <Form onSubmit={this.handleSubmit}>
            <Form.Item>
                {getFieldDecorator('name', {
                    rules: [{required: true, message: 'Please input the file name'}],
                })(
                    <Input placeholder="file name"/>
                )}
            </Form.Item>
            <Button type="primary" htmlType="submit">Create file</Button>
        </Form>
    }
}

const FileFormComponent = Form.create<FileFormProps & FormComponentProps>()(FileForm);