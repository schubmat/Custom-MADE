import * as React from "react";
import {useState} from "react";
import {Divider, Menu, Typography} from "antd";
import AddSshKeyForm from "./AddSshKeyForm";


interface Content {
    key: string;
    title: string;
    render: () => JSX.Element;
}

const {Title, Text} = Typography;

const RegisterPublicKey = (props: any) => {
        return <a
            href={"https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account"}
            target={"_blank"}>
            {props.children}
        </a>
};

const AddSshKey = () => {
    const [render, setRender] = useState<string>('custom');

    const renderCheckForExistingKeys = () => {
        return <div>
            <Title level={4}>Check for Existing SSH Keys</Title>
            If you dont' want to generate a new SSH key,
            you can check for already existing keys.
            <ol>
                <li>
                    Open terminal (Linux and Mac) or Git Bash (Windows).
                </li>
                <li>
                    Enter
                    <br/>
                    <Text copyable code>ls -al ~/.ssh</Text>
                    <br/>
                    to list the files in your <i>.ssh</i> directory.
                </li>
                <li>
                    Default filenames of the public keys are:
                    <ul>
                        <li>id_rsa.pub</li>
                        <li>id_ecdsa.pub</li>
                        <li>id_ed25519.pub</li>
                    </ul>
                </li>
                <li>
                    If there is an unused and matching key,&nbsp;
                    <RegisterPublicKey>register it</RegisterPublicKey>&nbsp;
                    for your project on the git remote repository.
                </li>
            </ol>
        </div>
    };

    const renderGenerateKey = () => {
        return <div>
            <Title level={4}>Generate a New SSH Key</Title>
            If you don't have an SSH key or you don't want use an existing one,
            you can generate a new key.
            <ol>
                <li>
                    Open terminal (Linux and Mac) or Git Bash (Windows).
                </li>
                <li>
                    Enter<
                    br/>
                    <Text copyable code>ssh-keygen -t rsa -b 4096 -C
                        "your_email@example.com"</Text>
                </li>
                <li>
                    You will be asked in which file you want to save the key
                    (press Enter to accept the default file location):
                    <br/>
                    <Text code>
                        Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter]
                    </Text>
                </li>
                <li>
                    Further, you will be asked to enter a passphrase:
                    <br/>
                    <Text code>
                        Enter passphrase (empty for no passphrase):
                    </Text>
                    <br/>
                    You need to press Enter to use <Text strong>no</Text> passphrase.
                    <Text strong>This is necessary to use the key via Custom-MADE.</Text>
                </li>
                <li>
                    <li>
                        If there is an unused and matching key,&nbsp;
                        <RegisterPublicKey>register it</RegisterPublicKey>&nbsp;
                        for your project on the git remote repository.
                    </li>
                </li>
            </ol>
        </div>
    };

    const renderAddKeyToGithub = () => {
        return <div>
            <Title level={4}>Add Public Key to GitLab</Title>
            You need to register your public key to your project's GitHub-plattform.
            <ol>
                <li>
                    Click your profile photo on the upper-right corner of any page
                    and select <i>Settings</i>.
                    <br/>
                    <img src={"https://help.github.com/assets/images/help/settings/userbar-account-settings.png"}/>
                </li>
                <li>
                    In the sidebar, navigate to <i>SSH</i>.
                    <br/>
                    <img src={"https://help.github.com/assets/images/help/settings/settings-sidebar-ssh-keys.png"}/>
                </li>
                <li>
                    Copy the public key's filecontent in the textarea and choose a title.
                    <br/>
                    <img src={"https://help.github.com/assets/images/help/settings/ssh-key-paste.png"}/>
                </li>
                <li>
                    Click <i>Add key</i>.
                </li>
            </ol>
        </div>
    };

    const renderForm = () => {
        return <div>
            <Title level={4}>Instructions for Adding an SSH Key</Title>
            You need to&nbsp;
            <RegisterPublicKey>
                register the public key
            </RegisterPublicKey> at your project's GitLab first.
            After that, you can upload the corresponding private key to Custom-MADE
            by using the following form.
            We need the private key to authenticate at your project's GitLab
            and to synchronize your project.
            The private key has the same filename as the public key but without any extension.
            After verifying the key, you may select it in the Git-Setup for your projects.
            <Divider/>
            <AddSshKeyForm
                nav2checkForExistingKeys={() => setRender('check')}
                nav2generateKey={() => setRender('generate')}
            />
        </div>;
    };

    const contents: Content[] = [
        {key: "custom", title: 'Add Key', render: renderForm},
        {key: "check", title: 'Check for Existing Keys', render: renderCheckForExistingKeys},
        {key: "generate", title: 'Generate New Key', render: renderGenerateKey},
        // {key: "github", title: 'GitHub', render: renderAddKeyToGithub}
        ];

    const renderContent = () => {
        const content = contents.find(c => c.key == render);
        if (!content)
            return null;
        return content.render();
    };

    return <span>
        <Menu mode="horizontal" selectedKeys={[render]} onClick={e => setRender(e.key)}>
            {contents.map(c => (
                <Menu.Item key={c.key}>
                    {c.title}
                </Menu.Item>
            ))}
    </Menu>
        <br/>
        {renderContent()}
    </span>;
};

export default AddSshKey;