import React from 'react';
import { Button, Input, Modal } from 'antd';

import './style.scss';
import { useState } from 'react';
import { handleLogin } from '../../utils/authen';

const Login = ({ isShow, setShow, callback }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = () => {
        handleLogin(email);
        setShow(false)
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
                    <p>
                        Bạn chưa có tài khoản? Bấm vào
                        <a onClick={() => callback(false)}>{' '}đây{' '}</a>
                        để tạo tài khoản mới.
                    </p>
                </div>
                <div>
                    <Button onClick={login} type="primary" size='large'>
                        Đăng nhập
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

export default React.memo(Login);