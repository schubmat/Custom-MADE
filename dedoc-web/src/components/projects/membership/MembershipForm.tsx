import Form, {FormComponentProps} from "antd/lib/form";
import {Button, Icon, message, Select} from "antd";
import * as React from "react";
import {User} from "../../../services/users";
import PermissionSelect from "./PermissionSelect";
import {useProjectVersion} from "../../../contexts/ProjectVersion";
import {useUsers} from "../../../contexts/Users";

const MembershipForm = (props: FormComponentProps) => {

    const version = useProjectVersion();
    const users = useUsers();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                const user = users.raw.items.find(u => u.id == values.userId);
                if (user) {
                    const membership: any = {
                        version: version.getEntity(),
                        user: user.getEntity(),
                        permissions: values.permissions
                    };
                    version.memberships.add(membership)
                        .then(() => message.success(membership.user.username + "was added to version"))
                        .catch((error: Error) => message.error(error.message));
                    props.form.resetFields();
                }
            }
        });
    };

    const { Option } = Select;
    const {getFieldDecorator} = props.form;
    const usersPermissions = version.usersPermissions;
    const notMembers = users.getNotMembers(version);
    return <Form layout="inline" onSubmit={handleSubmit}>
        <span style={{display: "table-cell", width: "100%"}}>
        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "60%", marginRight: "2%", verticalAlign: "top" }}>
            {getFieldDecorator('userId', {
                rules: [{required: true, message: 'Please select a user'}],
            })(
                <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder="username"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.props.title !== undefined && option.props.title.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {notMembers.sort((a,b) => a.username < b.username ? -1 : 1).map((user: User) => (
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
        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "36%", marginRight: "2%", verticalAlign: "top" }}>
            {getFieldDecorator('permissions', {
                rules: [{required: true, message: 'Please select a role'}],
            })(
                <PermissionSelect
                    usersPermissions={usersPermissions}
                    onSelect={p => props.form.setFieldsValue({permissions: p})}
                />
            )}

        </Form.Item>
        </span>
        <span style={{display: "table-cell", verticalAlign: "top"}}>
            <Button type="primary" htmlType="submit"><Icon type="user-add" /></Button>
        </span>
    </Form>
}

export default Form.create<FormComponentProps>()(MembershipForm);