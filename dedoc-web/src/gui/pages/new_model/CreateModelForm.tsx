import * as React from "react";
import {Button, Col, Divider, Form, message, Row} from "antd";
import {Project, ProjectLevel} from "../../../model/types";
import GeneralProjectFormItems from "../../shared/dumb/GeneralProjectFormItems";
import {FormComponentProps} from "antd/lib/form";
import {ArrayState} from "../../../state/stateArray";
import {ROUTES} from "../../../constants/routes";

export interface NewM1ProjectFormProps {
    history: any;
    models: ArrayState<Project>;
}

class CreateModelForm extends React.Component<NewM1ProjectFormProps & FormComponentProps> {

    private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const newProject = {
                    name: values.name,
                    level: ProjectLevel.M1,
                    description: values.description,
                };
                this.props.models.add(newProject).then((project: Project) => {
                    message.success(`Project ${project.name} was created`);
                    this.props.history.push(ROUTES.MODELS);
                })
                .catch(error => {
                    message.error(error.toString());
                });
            }
        });
    };

    render() {
        const {form} = this.props;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Row justify={"center"}>
                    <Col span={8}>
                        <GeneralProjectFormItems getFieldDecorator={form.getFieldDecorator} />
                        <Divider/>
                        <Button type="primary" htmlType="submit">Create project</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default Form.create<NewM1ProjectFormProps & FormComponentProps>()(CreateModelForm);