import React from "react";


export const MonacoEditor = ({workspaceDir}: {workspaceDir: string}) => {

    
    console.log("====")
    console.log(workspaceDir)
    console.log("====")

    return (
        <iframe
            title={"monaco-editor"}
            src={`http://localhost:3001/#${workspaceDir}`}
            width={"100%"}
            height={"100%"}
            id={"editor-iframe"}
            scrolling={"no"}
            style={{border: "1px solid grey"}}
            ref={(f: any) => {
            }}
        />
    );
};