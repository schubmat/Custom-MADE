import React from 'react';
import {Button, Form, Input, message} from "antd";
import GrammarSelectionFormItems from "../../GrammarSelectionFormItems";
import {FormComponentProps} from "antd/lib/form";
import {ROUTES} from "../../../../constants/routes";
import {useHistory} from "react-router";
import {useGrammars} from "../../../../contexts/Projects";
import {useProject} from "../../../../contexts/Project";

const VersionForm = (props: FormComponentProps) => {
    const history = useHistory();
    const grammars = useGrammars();
    const {project} = useProject();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                const grammar = grammars.getVersionById(values.grammarId);
                if (grammar === undefined)
                    return;
                const newVersion = {
                    project: project.getEntity(),
                    description: values.description,
                    version: values.version,
                    dslExtension: values.dslExtension,
                    grammar: grammar
                };

                project.versions.add(newVersion).then(version => {
                    message.success(`Version ${version.version} was created`);
                    if (version.files.length === 1) {
                        history.push(`editor/${version.files[0].id}`)
                    }
                    else {
                        history.push(`${ROUTES.VERSIONS}/${version.id}`)
                    }
                }).catch(error => {
                    console.log(error);
                    message.error(error.toString());
                });
            }
        });
    };

    const {getFieldDecorator} = props.form;
    return <Form onSubmit={handleSubmit}>
        <Form.Item>
            {getFieldDecorator('version', {
                rules: [{required: true, message: 'Please input the version name'}],
            })(
                <Input placeholder="Version name"/>
            )}
        </Form.Item>
        <Form.Item>
            {getFieldDecorator('description', {
                rules: [{required: true, message: 'Please write a description'}],
            })(
                <Input placeholder="description"/>
            )}
        </Form.Item>

        <GrammarSelectionFormItems
            grammars={grammars.raw.getEntityArray()}
            metaName={"Meta language"}
            getFieldDecorator={getFieldDecorator}
        />

        <Form.Item>
            {getFieldDecorator('dslExtension', {
                rules: [{required: true, message: 'Please input the dsl extension'}],
            })(
                <Input placeholder="dsl extension"/>
            )}
        </Form.Item>
        <Button type="primary" htmlType="submit">Create Version</Button>
    </Form>
};

export default Form.create<FormComponentProps>()(VersionForm);