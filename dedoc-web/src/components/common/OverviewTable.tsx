import * as React from "react";
import {Table} from "antd";
import {RouteComponentProps, withRouter} from "react-router";
import {TableEventListeners} from "antd/lib/table";


export interface OverviewTableProps extends RouteComponentProps {
    selection: {
        selectedKeys: string[] | number[];
        onChange: (selectedKeys: string[] | number[]) => void;
    };
    columns: (props: OverviewTableProps) => {
        title: string;
        dataIndex: string;
        key?: string;
        render?: any;
    }[]
    dataSource: unknown[],
    onRow: ((record: unknown, index: number) => TableEventListeners) | undefined
}

interface OverviewTableState {

}

class OverviewTable extends React.Component<OverviewTableProps, OverviewTableState> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render() {
        return <Table rowSelection={this.props.selection}
                      columns={this.props.columns(this.props)}
                      dataSource={this.props.dataSource}
                      onRow={this.props.onRow}
                      size={"small"}/>
    }
}

export default withRouter(OverviewTable);