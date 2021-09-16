import {Form, Select} from "antd";
import React from "react";
import {Project, Version} from "../../../model/types";

export interface GrammarSelectionFormItemsData {
    grammars: Project[];
    metaName: string;
    getFieldDecorator: any;
}

interface GrammarSelectionState {
    versions: Version[]
}

class GrammarSelectionFormItems extends React.Component<GrammarSelectionFormItemsData, GrammarSelectionState> {

    constructor(props: any) {
        super(props);
        this.state = {
            versions: []
        }
    }

    private onGrammarProjectChange = (projectId: number) => {
        let grammar =  this.props.grammars.find(
            (grammar: Project) => grammar.id == projectId);
        if (!grammar)
            return;
        this.setState({
            versions: grammar.versions.filter(version => version.valid)
        });
    };

    render () {
        const { Option } = Select;
        const {grammars, metaName, getFieldDecorator} = this.props;
        let {versions} = this.state;
        versions = versions.filter((v: Version) => v.valid);
        return <span>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder={metaName}
                optionFilterProp="children"
                onChange={this.onGrammarProjectChange}
                filterOption={(input, option) =>
                    option.props.title !== undefined && option.props.title.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {grammars
                    .filter((d: Project) => d.versions.filter((v: Version) => v.valid).length >= 1)
                    .sort((a, b) => a.name < b.name ? -1 : 1)
                    .map((d: Project) => (
                        <Option
                            key={d.id}
                            title={d.name}
                        >
                            {d.name}
                        </Option>
                    ))}
            </Select>
            <Form.Item>
            {getFieldDecorator('grammarId', {
                rules: [{required: true, message: 'Please choose a grammar'}],
            })(
                <Select
                    showSearch
                    disabled={versions.length === 0}
                    style={{ width: 200 }}
                    placeholder="Version"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.props.title !== undefined && option.props.title.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {versions.sort((a, b) => a.version < b.version ? -1 : 1).map((d: Version) => (
                        <Option
                            key={d.id}
                            title={d.version}
                        >
                            {d.version}
                        </Option>
                    ))}
                </Select>

            )}
        </Form.Item>
        </span>
    }
}

export default GrammarSelectionFormItems;