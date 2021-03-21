import * as React from "react";
import JSZip from "jszip";
import {useState} from "react";

export interface SimpleStorageFileRepresentation {
    name: string,
    content: string,
}

const FileDownloadLink = ({file, children}: {file: SimpleStorageFileRepresentation, children: React.ReactNode}) => {
    const filetype = "text/plain";
    const dataURI = "data:" + filetype +
        ";base64," + btoa(file.content);
    return <a download={file.name} href={dataURI}>
        {children}
    </a>
};

export const ZipDownloadLink = ({zipName, files, children}:
                             {zipName: string, files: SimpleStorageFileRepresentation[], children: React.ReactNode}) => {
    const [base64, setBase64] = useState<string | undefined>(undefined);
    const zip = new JSZip();
    files.forEach(file => {
        zip.file(file.name, file.content);
    });
    zip.generateAsync({type:"base64"}).then(base64 => {
         setBase64(base64);
    });
    const prefixDataURI = "data:application/zip;base64,";
    if (base64)
        return <a download={zipName} href={prefixDataURI+base64}>
            {children}
        </a>;
    return <a>
        {children}
    </a>;
};

export default FileDownloadLink;