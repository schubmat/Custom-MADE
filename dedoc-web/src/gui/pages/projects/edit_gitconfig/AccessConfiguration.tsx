import * as React from "react";
import {useState} from "react";
import "./GitConnectionView.css"
import {AutoComplete, Button, Divider, Form, Icon, message, Modal, Select} from "antd";
import {GitAccount} from "../../../../model/types";
import {showError} from "../../../../constants/functions";
import {GitConnectionStatus, useEditGitConnection} from "./EditGitConnectionContext";
import {useGitAccounts} from "./GitAccounts";
import {State} from "../../../../state/stateEntity";
import {AddSshKeyProvider} from "./AddSshKeyContext";
import AddSshKey from "./AddSshKey";

const {Option} = Select;

const AccessConfiguration = () => {
    const [isSshKeyFormVisible, setSshKeyFormVisible] = useState<boolean>(false);
    const gitAccounts = useGitAccounts();
    const gitConnection = useEditGitConnection();

    const [typingTimer, setTypingTimer] = useState<any>();

    const onUserTypingCloneUrl = (cloneUrl: string) => {
        const setCloneUrl = gitConnection.cloneUrl.set;
        if (typingTimer)
            clearTimeout(typingTimer);
        setTypingTimer(setTimeout(() => setCloneUrl(cloneUrl), 1000));
        setCloneUrl(cloneUrl);
    };

    const renderUrlField = () => {
        const cloneUrl = gitConnection.cloneUrl.value;
        const children = gitAccounts.orderByRelevance(cloneUrl)
                .map(git => git.plattformUrl)
                //filter duplicates
                .filter((value, index, self) => self.indexOf(value) === index);
        return <Form.Item>
            <AutoComplete defaultValue={cloneUrl}
                          className={"full-line-field"}
                          dataSource={children}
                          onChange={value => onUserTypingCloneUrl(value.toString())}
                          placeholder="clone url"/>
        </Form.Item>;
    };

    const renderSshKeyField = () => {
        const cloneUrl = gitConnection.cloneUrl.value;
        const {selectedGitAccount, selectGitAccount} = gitConnection.gitAccount;
        const keys: State<GitAccount>[] = gitConnection.gitAccount.availableGitAccounts;
        if (keys.length == 0)
            return <Form.Item><Button style={{width: '100%'}} disabled={cloneUrl.length == 0}
                                      onClick={openAddSshKeyForm}><Icon type="plus"/>Add key</Button></Form.Item>;
        return <Form.Item>
            <Select<string>
                className={"full-line-field"}
                placeholder={"SSH key"}
                value={selectedGitAccount ? selectedGitAccount.name : undefined}
                dropdownRender={menu => <div>
                    {menu}
                    <Divider style={{margin: '4px 0'}}/>
                    <div
                        style={{padding: '4px 8px', cursor: 'pointer'}}
                        onMouseDown={e => e.preventDefault()}
                        onClick={openAddSshKeyForm}
                    >
                        <Icon type="plus"/> Add key
                    </div>
                </div>}
                onSelect={(name: string) => selectGitAccount(keys.find(e => e.name == name))}
            >
                {keys.sort((a, b) => a.name < b.name ? -1 : 1).map(git => <Option key={git.name} {...git}>
                    {git.name}
                </Option>)}
            </Select>
        </Form.Item>
    };

    const renderConnectionStatus = () => {
        const {connectionStatus, checkConnection, getSubUrl, selectedGitAccount} = gitConnection.gitAccount;
        let icon;
        let content;

        if (connectionStatus == GitConnectionStatus.UNKNOWN) {
            icon = undefined;
            content = "Check connection";
        }
        else if (connectionStatus == GitConnectionStatus.SUCCESSFUL) {
            icon = "check-circle";
            content = "Connection successful";
        }
        else if (connectionStatus == GitConnectionStatus.FAILED) {
            icon = "exclamation-circle";
            content = "Connection failed";
        }
        else if (connectionStatus == GitConnectionStatus.LOADING) {
            icon = "loading";
            content = "Checking..."
        }

        return <Form.Item>
                <Button
                id={"check-connection-button"}
                icon={icon}
                disabled={!selectedGitAccount || connectionStatus != GitConnectionStatus.UNKNOWN || getSubUrl().length == 0}
                onClick={() => checkConnection(showError)}>
                {content}
            </Button>
        </Form.Item>
    };

    const openAddSshKeyForm = () => {
        setSshKeyFormVisible(true);
    };
    const finishSshKeyForm = (newGit: GitAccount) => {
        const cloneUrl = gitConnection.cloneUrl.value;
        if (gitAccounts.matches(newGit, cloneUrl))
            gitConnection.gitAccount.selectGitAccount(newGit);
        setSshKeyFormVisible(false);
        message.success("SSH key for GitLab-user '" + newGit.name + "' was added");
    };

    const cloneUrl = gitConnection.cloneUrl.value;
    let splitIndex = cloneUrl.length;
    if (cloneUrl.indexOf(":") >= 0)
        splitIndex = cloneUrl.indexOf(":");
    else if (cloneUrl.indexOf("/") >= 0)
        splitIndex = cloneUrl.indexOf("/");
    const meantPlattformUrl = cloneUrl.substr(0, splitIndex);

    return <div>
        <h3>Clone URL</h3>
        {renderUrlField()}
        <h3>SSH key</h3>
        {renderSshKeyField()}
        {renderConnectionStatus()}
        <Modal
            title={"Add SSH Key"}
            visible={isSshKeyFormVisible}
            onCancel={() => setSshKeyFormVisible(false)}
            footer={[]}>
            <AddSshKeyProvider presetUrl={meantPlattformUrl} onSuccess={finishSshKeyForm}>
                <AddSshKey/>
            </AddSshKeyProvider>
        </Modal>
    </div>;

};

export default AccessConfiguration;