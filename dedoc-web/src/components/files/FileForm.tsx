import Form, {FormComponentProps} from "antd/lib/form";
import * as React from "react";
import {Button, Input, message} from "antd";
import {Version} from "../../model/types";
import {State} from "../../model/stateEntity";


export interface FileFormProps {
    version: State<Required<Version>>;
}

class FileForm extends React.Component<FileFormProps & FormComponentProps> {

    private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.version = {id: this.props.version.id};
                this.props.version.files.add(values).then(file => {
                    message.success(`File ${file.name} was created`);
                    this.props.form.resetFields();
                }).catch((error:Error) => {
                    message.error(error.toString());
                });
                // .finally(() => setCreateFileVisibility(false));
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

export default Form.create<FileFormProps & FormComponentProps>()(FileForm);