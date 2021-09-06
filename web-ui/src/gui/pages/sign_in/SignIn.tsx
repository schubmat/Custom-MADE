import * as React from "react";
import {useEffect} from "react";
import {Button, Form, Icon, Input, message} from "antd";
import {FormComponentProps} from 'antd/lib/form/Form';

import "./SignIn.css";
import {useHistory} from "react-router";
import {useAuthentication} from "../../shared/contexts/Authentication";
import {ROUTES} from "../../../constants/routes";

interface LoginProps extends FormComponentProps {}

const SignIn = (props: LoginProps) => {
    const history = useHistory();
    const auth = useAuthentication();
    if (auth.isAuthorized())
        history.push(ROUTES.HOME);

    useEffect(() => {
        if (!auth.error)
            return;
        message.error(auth.error.message);
    }, [auth.error]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                auth.login(values.username.trim(), values.password.trim());
            }
        });
    };

    const {getFieldDecorator} = props.form;
    return (
        <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{required: true, message: 'Please input your username!'}],
                })(
                    <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                           placeholder="Username"/>
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{required: true, message: 'Please input your Password!'}],
                })(
                    <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                           placeholder="Password"/>
                )}
            </Form.Item>
            <Form.Item>
                {/*{getFieldDecorator('remember', {*/}
                {/*valuePropName: 'checked',*/}
                {/*initialValue: true,*/}
                {/*})(*/}
                {/*<Checkbox>Remember me</Checkbox>*/}
                {/*)}*/}
                {/*/!*<a className="login-form-forgot">Forgot password</a>*!/*/}
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href={ROUTES.SIGN_UP}>register now!</a>
            </Form.Item>
        </Form>
    );

};

export default Form.create<LoginProps>()(SignIn);