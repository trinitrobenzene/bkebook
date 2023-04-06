import React from 'react';
import { Button, Input, Modal } from 'antd';
import { useCookies } from "react-cookie";

import './style.scss';

const Login = ({isShow, setShow}) => {
    const [cookies, setCookie] = useCookies(["user"]);
    const handleLogin = () => {
        console.log(cookies);
        const current = new Date;
        setCookie('username', 'Buu', { path: '/'});
    }
    return (
        <Modal title="Login" open={isShow} onOk={()=>setShow(true)} onCancel={()=>setShow(false)}>
            <form id='login'>
                <div>
                <label>Email</label>
                <Input />
                </div>
                <div>
                    <label>Mật khẩu</label>
                    <Input type='password'/>
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