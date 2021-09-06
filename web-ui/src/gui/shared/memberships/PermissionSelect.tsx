import * as React from "react";
import {Permissions} from "../../../model/types";
import {Select} from "antd";
import {permissionLevels} from ".";

const { Option } = Select;


export interface PermissionSelectProps {
    usersPermissions: Permissions;
    onSelect: (selected: Permissions) => void;
    defaultValue?: Permissions;
}

class PermissionSelect extends React.Component<PermissionSelectProps> {

    onSelectKey = (roleName: string) => {
       const role = permissionLevels.find(level => level.name == roleName);
       if (!role)
           return;
       this.props.onSelect(role.p);
    };

    render() {
        const {usersPermissions, defaultValue} = this.props;
        let init = undefined;
        if (defaultValue) {
            const level = permissionLevels.find(l => l.p.equals( defaultValue));
            if (level)
                init = level.name;
        }
        return <Select<string>
            defaultValue={init}
            loading={!usersPermissions}
            style={{ width: '100%' }}
            placeholder="type"
            onSelect={this.onSelectKey}>
            {usersPermissions && permissionLevels.filter(level => usersPermissions.isGreaterThan(level.p)).map(level => (
                <Option
                    key={level.name}
                    title={level.name}
                >
                    {level.name}
                </Option>
            ))}
        </Select>
    }
}

export default PermissionSelect;