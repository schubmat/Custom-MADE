import React from "react";


export const MonacoEditor = () => {
    return (
        <iframe
            title={"monaco-editor"}
            src={`http://localhost:3001/`}
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