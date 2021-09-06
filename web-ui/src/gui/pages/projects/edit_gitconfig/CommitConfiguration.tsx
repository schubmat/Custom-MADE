import * as React from "react";
import "./GitConnectionView.css"
import {AutoComplete, Form, Input, Radio, Typography} from "antd";
import {
    defaultBranch,
    defaultDir,
    proposedBranches,
    proposedDirs,
    useEditGitConnection
} from "./EditGitConnectionContext";
import {trimDirNames} from "../../../../constants/functions";

const {Text, Title} = Typography;
const {Option, OptGroup} = AutoComplete;

const CommitConfiguration = () => {
    const editGitConnection = useEditGitConnection();
    const {connectionStatus} = editGitConnection.gitAccount;

    const renderBranchSelect = () => {
        const {connectionStatus} = editGitConnection.gitAccount;
        const {selectedBranch, setBranch, availableBranches} = editGitConnection.branch;

        return <Form.Item>
            <AutoComplete dataSource={renderOptionGroups(proposedBranches, availableBranches, selectedBranch, "branches")}
                          className={"full-line-field"}
                // disabled={connectionStatus != GitConnectionStatus.SUCCESSFUL}
                          onChange={value => setBranch(value.toString())}
                          value={selectedBranch}
                          placeholder={defaultBranch}/>
        </Form.Item>
    };

    const renderDirSelect = () => {
        const {selectedDir, setDir, availableDirs} = editGitConnection.dir;
        const existing = trimDirNames(availableDirs);
        return <Form.Item>
            <AutoComplete dataSource={renderOptionGroups(proposedDirs, existing, selectedDir, "dirs")}
                          className={"full-line-field"}
                // disabled={connectionStatus != GitConnectionStatus.SUCCESSFUL}
                          onChange={value => setDir(value.toString())}
                          value={selectedDir}
                          placeholder={defaultDir}/>
        </Form.Item>
    };

    const renderOptionGroups = (suggestions: string[], existing: string[], inputValue: string, contextName: string) => {
        return [
            <OptGroup label={"Proposed  " + contextName}>
                {renderOptions(suggestions, inputValue)}
            </OptGroup>,
            <OptGroup label={"Existing " + contextName}>
                {renderOptions(existing, inputValue)}
            </OptGroup>
        ];
    };

    const renderOptions = (titles: string[], inputValue: string) => {
        return titles.filter(value => value.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0)
            .sort((a, b) => a < b ? -1 : 1)
            .map(title => <Option key={title}>{title}</Option>);
    };

    const renderUserSettings = () => {
        const [commonUser, setCommonUser] = editGitConnection.userSettings.isCommon;
        const [userSettings, setUserSettings] = editGitConnection.userSettings.selected;
        return <Form.Item>
            <Radio.Group
                value={commonUser}
                onChange={event => setCommonUser(event.target.value)}
            >
                <Radio
                    value={true}>
                    Use uniform commit settings for all users of the project.
                </Radio>
                <Radio
                    value={false}>
                    Allow each user to set up an individual configuration.
                </Radio>
            </Radio.Group>

            <table className={"full-line-field"}>
                <tr>
                    <td>
                        user.name
                    </td>
                    <td>
                        <Input
                            onChange={event => setUserSettings({...userSettings, name: event.target.value})}
                            value={userSettings.name}
                            placeholder={"git username"}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        user.email
                    </td>
                    <td>
                        <Input
                            onChange={event => setUserSettings({...userSettings, email: event.target.value})}
                            value={userSettings.email}
                            placeholder={"git email"}
                        />
                    </td>
                </tr>
            </table>

            {/*<span className={"small-left-field"}>*/}
            {/*user*/}
            {/*</span>*/}
            {/*<span className={"large-right-field"}>*/}
            {/*<Input*/}
            {/*onChange={event => setUserSettings({...userSettings, name: event.target.value})}*/}
            {/*value={userSettings.name}*/}
            {/*placeholder={"git username"}*/}
            {/*/>*/}
            {/*</span>*/}
            {/*<span className="small-left-field">*/}
            {/*email*/}
            {/*</span>*/}
            {/*<span className={"large-right-field"}>*/}
            {/*<Input*/}
            {/*onChange={event => setUserSettings({...userSettings, email: event.target.value})}*/}
            {/*value={userSettings.email}*/}
            {/*placeholder={"git email"}*/}
            {/*/>*/}
            {/*</span>*/}
        </Form.Item>
    };

    return <div>
        <h4>Branch</h4>
        {renderBranchSelect()}
        <h4>Directory</h4>
        {renderDirSelect()}
        <Title level={4}>Git Commit Configuration</Title>
        {renderUserSettings()}
    </div>
};

export default CommitConfiguration;
