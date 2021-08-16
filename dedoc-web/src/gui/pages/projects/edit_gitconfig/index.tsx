import * as React from "react";
import {useEffect, useState} from "react";
import "./GitConnectionView.css"
import {Button, Menu, message, Typography} from "antd";
import AccessConfiguration from "./AccessConfiguration";
import CommitConfiguration from "./CommitConfiguration";
import {useProjectVersion} from "../../../shared/contexts/ProjectVersion";
import {
    defaultBranch,
    defaultDir,
    GitConnectionStatus,
    useEditGitConnection
} from "./EditGitConnectionContext";
import {useGitAccounts} from "./GitAccounts";
import {useFileResponsePromise} from "../../../shared/useFileResponsePromise";
import {globalMessage} from "../../../shared/message/globalMessage";
import {useProjects} from "../../../shared/contexts/Projects";
import {FetchFileResponse} from "../../../../services/http";
import {usePromise} from "../../../shared/usePromise";
import {Version} from "../../../../model/types";
import {ValidatedVersion} from "../../../../rest_api/Version";

interface Content {
    key: string;
    title: string;
    render: () => JSX.Element;
}

const {Title, Paragraph} = Typography;

const GitConnectionView = (props: {onSubmit?: () => void}) => {
    const [render, setRender] = useState<string>("instructions");
    const version = useProjectVersion();
    const projects = useProjects();
    const gitConnection = useEditGitConnection();
    const gitAccounts = useGitAccounts();
    const responseMessage = globalMessage(projects.getProjectTitle(version) + " Git-Sync");

    let hide: () => void;
    const hideLoadingMessage = () => {
        if (hide)
            hide();
    };

    const fileResponse = usePromise<ValidatedVersion>(
        () => gitConnection.submit().then(() => version.validate(version.id)),
        response => responseMessage.success(<span>Synchronisation was successful.</span>),
        (error: Error) => responseMessage.error(error.message),
        hideLoadingMessage
    );

    const renderInstructions = () => {
        const platforms = gitAccounts.raw.items
            .map(git => git.plattformUrl)
            //filter duplicates
            .filter((value, index, self) => self.indexOf(value) === index)
            .sort((a, b) => a < b ? -1 : 1);
        return <div>
            <Title level={4}>Instructions</Title>
            <Paragraph>
            In order to connect your project to a remote git repository we decided to use SSH.
            Thus, we need you to check whether the git repository server you use is supported already or not
            and proceed accordingly:
            </Paragraph>
            <h3>Supported git repository server</h3>
            <Paragraph>
            For the platforms:
            <ul>
                {platforms.map(platform => <li>{platform}</li>)}
            </ul>
            We provide existing user accounts connecting our tool to your project.
            The only thing you have to do is to add our user "CUSTOM-MADE" to your project with "commit" permissions.
            After that, just enter the SSH git clone URL and click on "Check connection".
            Once it its confirmed you are all set and can proceed to repository configuration.
            </Paragraph>
            <h3>Connect another git repository server</h3>
            <Paragraph>
            In order to do so we strongly advise to create a new user and not to use your own user account.
            We dont't need access to all of your projects,
            but only to those which really should be supported by our tool.
            Commits will be done with your signature anyway.
            <br/>
            Now perform the following steps:
            <ol>
                <li>
                    Set up SSH access rights by uploading a new SSH key to your git repository plattform
                    for the recently creater user.
                </li>
                <li>
                    Upload the corresponding <b>SSH private key</b> to <b>our</b> plattform (see below)
                </li>
            </ol>
            After that, just enter the git clone URL and you're all set.
            <br/>
            Finally, you only need to check the connection and proceed to repository configuration if successful.
            </Paragraph>
        </div>
    };

    const renderAccessConfiguration = () => {
        return <div>
            <Title level={4}>Access Configuration</Title>
            <AccessConfiguration/>
        </div>;
    };

    const renderCommitConfiguration = () => {
        return <div>
            <Title level={4}>Global Configuration</Title>
            <CommitConfiguration/>
        </div>;
    };

    const renderBottomNavigation = () => {
        const content = contents.map((elem: Content, id: number) => {return {...elem, id}}).find(elem => elem.key == render);
        if (!content)
            return null;
        const {connectionStatus} = gitConnection.gitAccount;
        return <div id={"navigation"}>
            {content.id > 0 &&
                <Button type={"primary"}
                    id={"back-button"}
                    className={"navigation-button"}
                    onClick={() => setRender(contents[content.id-1].key)}>Back</Button>}
            {content.id < contents.length -1 &&
                <Button type={"primary"}
                    id={"next-button"}
                    className={"navigation-button"}
                    onClick={() => setRender(contents[content.id+1].key)}>Next</Button>}
            {content.id > 0 &&
                <Button type={"primary"}
                    disabled={connectionStatus != GitConnectionStatus.SUCCESSFUL || fileResponse.isLoading}
                    id={"submit-button"}
                    className={"navigation-button"}
                    onClick={submit}>Finish</Button>}
        </div>;
    };

    const submit = () => {
        hide = message.loading("Waiting for server to clone...", 0);
        fileResponse.start();
        if (props.onSubmit)
            props.onSubmit();
    };

    const contents: Content[] = [
        {key: "instructions", title: "Instructions", render: renderInstructions},
        {key: "access", title: "Access Configuration", render: renderAccessConfiguration},
        {key: "commit", title: "Commit Configuration", render: renderCommitConfiguration}
    ];

    const renderContent = () => {
        const content = contents.find(c => c.key == render);
        if (!content)
            return null;
        return content.render();
    };

    return <div>
        <Menu mode="horizontal" selectedKeys={[render]} onClick={e => setRender(e.key)}>
            {contents.map(c => (
                <Menu.Item key={c.key}>
                    {c.title}
                </Menu.Item>
            ))}
    </Menu>
        <br/>
        {renderContent()}
        {renderBottomNavigation()}
    </div>;
};

export default GitConnectionView;