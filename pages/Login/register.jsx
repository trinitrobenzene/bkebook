import React from 'react';
import { Button, Input, Modal } from 'antd';

import './style.scss';
import { useState } from 'react';
import { handleSignUp } from '../../utils/authen';

const Register = ({ isShow, setShow, callback }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const handleRegister = () => {
        handleSignUp(name, email, password);
    }
    return (
        <Modal
            title="Register"
            open={isShow}
            onOk={() => setShow(true)}
            onCancel={() => setShow(false)}
            footer={null}
        >
            <form id='register'>
                <div>
                    <label>Họ và tên</label>
                    <Input onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Email</label>
                    <Input onChange={(e) => setEmail(e.target.value)} type='email' required />
                </div>
                <div>
                    <label>Mật khẩu</label>
                    <Input onChange={(e) => setPassword(e.target.value)} type='password' required />
                </div>
                <div>
                    <p>
                        Đã có tài khoản? Bấm vào
                        <a onClick={() => callback(true)}>{' '}đây{' '}</a>
                        để đăng nhập.
                    </p>
                </div>
                <div>
                    <Button type="primary" size='large' onClick={handleRegister}>
                        Đăng ký
                    </Button>
                </div>
            </form>
        </Modal>
    )
}

export default React.memo(Register)