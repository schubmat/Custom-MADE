import React, {useState} from "react";
import GeneralInformation from "./GeneralInformation";
import {Menu, Typography} from "antd";
import {MembershipsView} from "../../../shared/memberships";


interface Content {
    key: string;
    title: string;
    render: () => JSX.Element;
}

const {Title} = Typography;

const ProjectSettings = () => {
    const [render, setRender] = useState<string>("general");

    const renderGeneral = () => {
        return <div>
            <Title level={4}>General</Title>
            <GeneralInformation/>
        </div>
    };

    const renderMemberships = () => {
        return <div>
            <Title level={4}>Access rights</Title>
            <MembershipsView/>
        </div>
    };

    const contents: Content[] = [
        {key: "general", title: "General", render: renderGeneral},
        {key: "memberships", title: "Access rights", render: renderMemberships}
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

export default ProjectSettings;