import * as React from "react";
import {Form, Input, Radio} from "antd";
import {VisibilityLevel} from "../../model/types";

const {TextArea} = Input;
const RadioGroup = Radio.Group;

export interface GeneralProjectFormItemsData {
    getFieldDecorator: any
}

class GeneralProjectFormItems extends React.Component<GeneralProjectFormItemsData> {

    render() {
        const {getFieldDecorator} = this.props;
        return <span>
            <h3>Project name:</h3>
            <Form.Item>
                {getFieldDecorator('name', {
                    rules: [{required: true, message: 'Please input the project name'}],
                })(
                    <Input placeholder="My awesome project"/>
                )}
            </Form.Item>
            <h3>Project description:</h3>
            <Form.Item>
                {getFieldDecorator('description', {initialValue: null})(
                    <TextArea placeholder={"Description format"}/>
                )}
            </Form.Item>
            <h3>Project visibility:</h3>
            <Form.Item>
                {getFieldDecorator('visibilityLevel', {initialValue: VisibilityLevel.PRIVATE})(
                    <RadioGroup>
                        {Object.keys(VisibilityLevel).map((value: string, key: number) =>
                            <Radio
                                style={{display: 'block'}}
                                key={key}
                                value={value}>{value}</Radio>)}
                    </RadioGroup>
                )}
            </Form.Item>
        </span>
    }
}

export default GeneralProjectFormItems;