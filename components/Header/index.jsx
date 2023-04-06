import React, {useState} from 'react';
import { useCookies } from "react-cookie";
import { Button, Input } from 'antd';

import './style.scss';
import Login from '../../pages/Login'
const { Search } = Input;

const Header = () => {
    const [cookies, setCookie] = useCookies(["user"]);
    const [loginShow, setLoginShow] = useState(false);

    const onSearch = (value) => console.log(value);

    return (
        <header>
            <div className="mw">
                <h2>Logo</h2>
                <Search placeholder="input search text" onSearch={onSearch} />
                <>
                    <Button>Thông báo</Button>
                    <Button>Giỏ hàng</Button>
                    { cookies.username && <Button>Hello {cookies.username}</Button> }
                    { !cookies.username && <Button onClick={()=>setLoginShow(true)}>Đăng nhập</Button> }
                </>
            </div>
            {loginShow && <Login isShow={loginShow} setShow={setLoginShow}/>}
        </header>
    );
};

export default Header;
