import Form, {FormComponentProps} from "antd/lib/form";
import {Button, Icon, Select} from "antd";
import * as React from "react";
import {User} from "../../../services/users";
import PermissionSelect from "./PermissionSelect";
import {useProjectVersion} from "../contexts/ProjectVersion";
import {useUsers} from "../contexts/Users";
import {globalMessage} from "../message/globalMessage";

const {Option} = Select;

const AddMemberForm = (props: FormComponentProps) => {
    const {notMembersSorted, addMember, usersPermissions} = useAddMember();
    const {getFieldDecorator} = props.form;
    const message = globalMessage(`Add member`);

    const onAddMember = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.form.validateFields((err, values) => {
            if (err)
                return;
            addMember(values.userId, values.permissions,
                () => props.form.resetFields(),
                error => message.error(error.message));
        });
    };

    return <Form layout="inline" onSubmit={onAddMember}>
        <span style={{display: "table-cell", width: "100%"}}>
        <Form.Item wrapperCol={{sm: 24}} style={{width: "60%", marginRight: "2%", verticalAlign: "top"}}>
            {getFieldDecorator('userId', {
                rules: [{required: true, message: 'Please select a user'}],
            })(
                <Select
                    showSearch
                    style={{width: '100%'}}
                    placeholder="username"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.props.title !== undefined && option.props.title.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {notMembersSorted.map((user: User) => (
                        <Option
                            key={user.id}
                            title={user.username}
                        >
                            {user.username}
                        </Option>
                    ))}
                </Select>
            )}
        </Form.Item>
        <Form.Item wrapperCol={{sm: 24}} style={{width: "36%", marginRight: "2%", verticalAlign: "top"}}>
            {getFieldDecorator('permissions', {
                rules: [{required: true, message: 'Please select a role'}],
            })(
                <PermissionSelect
                    usersPermissions={usersPermissions.getEntity()}
                    onSelect={p => props.form.setFieldsValue({permissions: p})}
                />
            )}
        </Form.Item>
        </span>
        <span style={{display: "table-cell", verticalAlign: "top"}}>
            <Button type="primary" htmlType="submit"><Icon type="user-add"/></Button>
        </span>
    </Form>
};

const useAddMember = () => {
    const version = useProjectVersion();
    const users = useUsers();
    const usersPermissions = version.usersPermissions;
    const notMembersSorted = users.getNotMembers(version)
        .sort((a, b) => a.username < b.username ? -1 : 1);

    const addMember = (userId: number, permissions: Permissions,
                       onSuccess: () => void,
                       onError: (error: Error) => void) => {
        const user = users.raw.items.find(u => u.id == userId);
        if (!user)
            return;
        const membership: any = {
            version: version.getEntity(),
            user: user.getEntity(),
            permissions: permissions,
        };
        version.memberships.add(membership).then(onSuccess).catch(onError);
    };

    return {
        usersPermissions,
        notMembersSorted,
        addMember,
    }
};

export default Form.create<FormComponentProps>()(AddMemberForm);