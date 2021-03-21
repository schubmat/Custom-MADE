import * as React from "react";
import {Icon, Table} from "antd";
import {Version} from "../../../../model/types";
import MembershipsView from "../../membership/MembershipsView";
import {State} from "../../../../model/stateEntity";
import {ROUTES} from "../../../../constants/routes";
import GenericModal from "../../../common/GenericModal";
import {useHistory} from "react-router";
import {useVersionSelection} from "../../../../contexts/VersionSelection";
import {useProject} from "../../../../contexts/Project";
import {ProjectVersionProvider} from "../../../../contexts/ProjectVersion";


const versionColumns = () => [
    {title: "Version", dataIndex: "version", key: "version",},
    {title: "Description", dataIndex: "description", key: "project.description",},
    {title: "Extension", dataIndex: "fileExtension", key: "fileExtension",},
    {
        title: "Valid", dataIndex: "status", render: (text: any, record: State<Version>) => {
            if (record.valid)
                return <Icon type="check" />;
                // return <Icon type="exclamation" />
            return <Icon type="close" />
        }
    },
    {
        title: "", key: "actions", render: (record: State<Version>) => <ProjectVersionProvider value={record}>
            <span onClick={event => event.stopPropagation()}>
                <GenericModal title={record.version} content={<MembershipsView />}>
                  <Icon type="team"/>
                </GenericModal>
            </span>
        </ProjectVersionProvider>
    }
];

const VersionTableExtension = () => {
    const {project, orderVersionsByName} = useProject();
    const versionSelection = useVersionSelection();
    const history = useHistory();

    console.log(project);

    const onVersionRow = (record: State<Version>) => {
        return {
            onClick: () => {
                history.push(`${ROUTES.VERSIONS}/${record.id}`);
            }
        };
    };

    return <div>
        <Table<State<Version>>
            rowSelection={{
                onChange: (selectedRowKeys: number[] | string[], selectedRows: State<Version>[]) => {
                    versionSelection.onSelectionChange(selectedRows, project);
                }
            }}
            columns={versionColumns()}
            dataSource={orderVersionsByName()}
            pagination={false}
            onRow={onVersionRow}
            size={"small"}
            rowKey={(record: State<Version>) => record.id.toString()}
        />
    </div>;
};

export default VersionTableExtension;