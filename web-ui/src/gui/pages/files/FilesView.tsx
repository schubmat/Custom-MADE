import * as React from "react";
import {useEffect, useState} from "react";
import TableOptionDisabled from "../../assets/table_disabled.png";
import TableOptionEnabled from "../../assets/table_enabled.png";
import GridOptionEnabled from "../../assets/grid_enabled.png";
import GridOptionDisabled from "../../assets/grid_disabled.png";
import {Divider, Layout, message} from "antd";
import ImageButton from "../../shared/dumb/ImageButton";
import Sider from "../../shared/layout/sider/";
import Header from "../../shared/layout/Header";
import {useFullVersion} from "../../shared/contexts/FullProjectVersion";
import FileTable from "./FileTable";
import {Footer} from "../../shared/layout/footer";
import {SelectedFilesProvider} from "./SelectedFilesContext";
import {DeleteFilesButton} from "./DeleteFilesButton";
import {AddFileButton} from "./AddFileButton";
import {FetchExportsButton} from "./GetExportsButton";
import {UploadButton} from "./UploadButton";

export const FilesView = () => {
    const [layout, setLayout] = useState<"grid" | "table">("table");
    const {version, isLoading, error, getFullTitle} = useFullVersion();

    useEffect(() => {
        if (error)
            message.error(error.message);
    }, [error]);

    const renderDataLayout = (): React.ReactNode => {
        return <FileTable/>; //or grid
    };

    const renderTableOption = (): React.ReactNode => {
        return layout === "table" ?
            <ImageButton src={TableOptionDisabled} alt={"table layout"}/> :
            <ImageButton src={TableOptionEnabled} alt={"table layout"} onClick={() => {
                setLayout("table");
            }}/>
    };

    const renderGridOption = (): React.ReactNode => {
        return layout === "table" ?
            <ImageButton src={GridOptionEnabled} alt={"grid layout"} onClick={() => {
                setLayout("grid");
            }}/> :
            <ImageButton src={GridOptionDisabled} alt={"grid layout"}/>
    };

    return (
        <Layout>
            <Sider/>
            <Layout style={{marginLeft: 200, height: '100vh', width: '100%'}}>
                <Header title={version ? version.project.name : ""}/>
                <SelectedFilesProvider>
                    <Layout.Content>
                        <div style={{margin: '12px 8px'}}>
                            {renderTableOption()}
                            <Divider type={"vertical"}/>
                            {renderGridOption()}
                        </div>
                        {renderDataLayout()}
                    </Layout.Content>
                    <Footer>
                        <AddFileButton/>
                        <FetchExportsButton/>
                        <DeleteFilesButton/>
                        <UploadButton/>
                    </Footer>
                </SelectedFilesProvider>
            </Layout>
        </Layout>
    );
};