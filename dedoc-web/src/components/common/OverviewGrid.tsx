import * as React from "react";
import {RouteComponentProps} from "react-router";
import {List} from "antd";

interface OverviewGridProps<T> extends RouteComponentProps {
    selection: {
        selectedKeys: string[] | number[];
        onChange: (selectedKeys: string[] | number[]) => void;
    };
    elements: T[]
}

abstract class OverviewGrid<T> extends React.Component<OverviewGridProps<T>> {

    abstract renderItem: (item: T) => React.ReactNode;

    render() {
        return <List
            grid={{gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3}}
            dataSource={this.props.elements}
            renderItem={item => this.renderItem(item)}/>
    }

}

export default OverviewGrid;