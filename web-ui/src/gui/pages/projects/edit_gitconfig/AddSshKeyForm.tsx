import * as React from "react";
import {Button, Form, Icon, Input, message, Upload} from "antd";
import {RcFile} from "antd/lib/upload";
import {FormComponentProps} from "antd/lib/form";
import {useAddSshKey} from "./AddSshKeyContext";


export interface AddSshKeyFormProps extends FormComponentProps {
    nav2checkForExistingKeys?: () => void;
    nav2generateKey?: () => void;
}

const {Dragger} = Upload;

const AddSshKeyForm  = (props: AddSshKeyFormProps) => {
    const addSshKey = useAddSshKey();

    const beforeUpload = (file: RcFile, files: RcFile[]): boolean => {
        if (files.length == 0)
            addSshKey.setSshKey(undefined);
        else
            addSshKey.setSshKey(files[0]);
        return true;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!addSshKey.sshKey) {
            message.info("Select a file");
            return;
        }
        props.form.validateFields((err, values) => {
            if (err)
                return;
            addSshKey.setPlattformUrl(values.plattformUrl);
            addSshKey.submit((error: Error) => message.error(error.message));
        });
    };

    const renderHelpingLinks = () => {
        const {nav2checkForExistingKeys, nav2generateKey} = props;
        if (!nav2checkForExistingKeys && !nav2generateKey)
            return null;
        return <div>
            Further instructions
            <ul>
                {nav2checkForExistingKeys &&
                <li>
                    <a onClick={nav2checkForExistingKeys}>
                        Check for existing SSH keys
                    </a>
                </li>
                }
                {nav2generateKey &&
                <li>
                    <a onClick={nav2generateKey}>
                        Generate a new SSH key
                    </a>
                </li>
                }
            </ul>
        </div>
    };

    // renderHelpingLinks() {
    //     const {nav2checkForExistingKeys, nav2generateKey} = this.props;
    //     if (!nav2checkForExistingKeys && !nav2generateKey)
    //         return null;
    //     return <div>
    //         {nav2checkForExistingKeys &&
    //         <a onClick={nav2checkForExistingKeys}>
    //             Check for existing SSH keys<br/>
    //         </a>
    //         }
    //         {nav2generateKey &&
    //         <a onClick={nav2generateKey}>
    //             Generate a new SSH key<br/>
    //         </a>
    //         }
    //     </div>
    // }


    const {getFieldDecorator} = props.form;
    return <div>
        <Form onSubmit={handleSubmit}>
            <h3>The SSH Clone URL</h3>
            <Form.Item>
                {getFieldDecorator('plattformUrl', {
                    rules: [{required: true, message: "Please enter the plattform's url"}],
                    initialValue: addSshKey.plattformUrl
                })(
                    <Input placeholder={"plattform url"}/>
                )}
            </Form.Item>
            <Form.Item>
                <Dragger
                    name={"ssh_key"}
                    multiple={false}
                    beforeUpload={beforeUpload}
                    fileList={addSshKey.sshKey ? [addSshKey.sshKey] : []}
                >
                    <p className="ant-upload-drag-icon">
                        <Icon type="inbox"/>
                    </p>
                    <p className="ant-upload-text">Click or drag the private SSH key to this area to upload</p>
                </Dragger>
            </Form.Item>
            {renderHelpingLinks()}
            <Form.Item>
                <Button type={"primary"} htmlType={"submit"}>
                    Verify
                </Button>
            </Form.Item>
        </Form>
    </div>
};

export default Form.create<AddSshKeyFormProps & FormComponentProps>()(AddSshKeyForm);