import * as React from "react";
import {Form, Input, Radio} from "antd";

const {TextArea} = Input;

export interface GeneralProjectFormItemsData {
    getFieldDecorator: any,

}

class GeneralProjectFormItems extends React.Component<GeneralProjectFormItemsData> {

    render() {
        const {getFieldDecorator} = this.props;
        return <span>
            <h3>Name:</h3>
            <Form.Item>
                {getFieldDecorator('name', {
                    rules: [{required: true, message: 'Please input the project name'}],
                })(
                    <Input placeholder="My awesome project"/>
                )}
            </Form.Item>
            <h3>Description:</h3>
            <Form.Item>
                {getFieldDecorator('description', {initialValue: null})(
                    <TextArea placeholder={"Description format"}/>
                )}
            </Form.Item>
        </span>
    }
}

export default GeneralProjectFormItems;