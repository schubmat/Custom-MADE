import React from "react";

 
export const TheiaEditor = ({workspaceDir}: {workspaceDir: string}) => {

    return (
        <iframe
            title={"theia-editor"}
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