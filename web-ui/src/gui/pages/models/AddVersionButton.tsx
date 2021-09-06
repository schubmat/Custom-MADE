import {Button, Form, Input, message, Popover} from "antd";
import * as React from "react";
import {FormComponentProps} from "antd/lib/form";
import {useHistory} from "react-router";
import {useGrammars} from "../../shared/contexts/Projects";
import {useProject} from "./Project";
import {ROUTES} from "../../../constants/routes";
import GrammarSelectionFormItems from "../../shared/dumb/GrammarSelectionFormItems";
import {Version} from "../../../model/types";
import {globalMessage} from "../../shared/message/globalMessage";

export const AddVersionButton = () => {
    return <Popover
        content={
            <VersionFormComponent/>}
        trigger={"click"}
    >
        <Button type={"primary"}>Add Version</Button>
    </Popover>
};

const useAddVersion = () => {
    const grammars = useGrammars();
    const {project} = useProject();

    const addVersion = (values: {grammarId: number, description: string, version: string, dslExtension: string},
                        onSuccess: (version: Required<Version>) => void,
                        onError: (error: Error) => void) => {
        const grammar = grammars.getVersionById(values.grammarId);
        if (grammar === undefined)
            return;
        const newVersion = {
            project: {...project.getEntity(), createdAt: undefined, lastEdited: undefined},
            description: values.description,
            version: values.version,
            dslExtension: values.dslExtension,
            grammar: {...grammar.getEntity(), createdAt: undefined, lastEdited: undefined},
        };
        project.versions.add(newVersion).then(onSuccess).catch(onError);
    };

    return {
        addVersion,
        grammars: grammars.raw.getEntityArray(),
        projectName: project.name,
    }
};


const VersionForm = (props: FormComponentProps) => {
    const history = useHistory();
    const {projectName, addVersion, grammars} = useAddVersion();
    const message = globalMessage(`Add version to ${projectName}`);

    const onSuccess = (version: Required<Version>) => {
        message.success(`Version ${version.version} was created`);
        if (version.files.length === 1) {
            history.push(`editor/${version.files[0].id}`)
        }
        else {
            history.push(`${ROUTES.VERSIONS}/${version.id}`)
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.form.validateFields((err, values) => {
            if (err)
                return;
            addVersion(values, onSuccess, error => message.error(error.message));
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
            grammars={grammars}
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

const VersionFormComponent = Form.create<FormComponentProps>()(VersionForm);