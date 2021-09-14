import "../../pages/projects/M0ProjectsView.css"

import * as React from "react";
import {useState} from "react";
import {Button, Checkbox, message, Popover} from "antd";

type Download = (raw: boolean, exports: boolean) => void;

const DownloadOptionsPopover = ({children, startDownload}: {children: React.ReactNode, startDownload: Download}) => {

    const [downloadRaw, setDownloadRaw] = useState<boolean>(false);
    const [downloadExport, setDownloadExport] = useState<boolean>(false);
    const [isVisible, setVisible] = useState<boolean>(false);

    const onDownload = () => {
        if (!downloadRaw && !downloadExport) {
            message.info("Nothing to download");
            return;
        }
        setVisible(false);
        setDownloadRaw(false);
        setDownloadExport(false);
        startDownload(downloadRaw, downloadExport);
    };

    return <Popover
        content={<span>
            <div>
                <Checkbox checked={downloadRaw} onChange={e => setDownloadRaw(e.target.checked)}>
                    Download raw
                </Checkbox>
            </div>
            <div>
                <Checkbox checked={downloadExport} onChange={e => setDownloadExport(e.target.checked)}>
                    Download export
                </Checkbox>
            </div>
            <br/>
            <div>
                <Button onClick={onDownload} className={"full-line-field"}>
                    Start download
                </Button>
            </div>
        </span>}
        trigger={"click"}
        visible={isVisible}
        onVisibleChange={setVisible}>
        {children}
    </Popover>;
};

export default DownloadOptionsPopover;