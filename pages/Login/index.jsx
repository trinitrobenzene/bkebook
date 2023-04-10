import React from 'react';
import { Button, Input, Modal } from 'antd';
import { useCookies } from "react-cookie";

import './style.scss';
import { useState } from 'react';

const Login = ({ isShow, setShow }) => {
    const [cookies, setCookie] = useCookies(["isLogin"]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        setCookie('email', email, { path: '/' });
        setCookie('isLogin', true, { path: '/' });
    }
    return (
        <Modal
            title="Login"
            open={isShow}
            onOk={() => setShow(true)}
            onCancel={() => setShow(false)}
            footer={null}
        >
            <form id='login'>
                <div>
                    <label>Email</label>
                    <Input onChange={(e) => setEmail(e.target.value)} type='email' required />
                </div>
                <div>
                    <label>Mật khẩu</label>
                    <Input type='password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <Button onClick={handleLogin}>Đăng nhập</Button>
                    <div>
                        <p>
                            Bạn chưa có tài khoản? Bấm vào <a>đây</a> để tạo tài khoản mới.
                        </p>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default Login;