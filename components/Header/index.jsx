import React, { useState, useEffect } from 'react';
import { useCookies } from "react-cookie";
import { Button, Input } from 'antd';

import './style.scss';
import Login from '../../pages/Login'
import { db } from '../../firebase-config';
import { doc, getDoc } from 'firebase/firestore';
const { Search } = Input;

const Header = () => {
    const [cookies, setCookie] = useCookies(['isLogin']);
    const [loginShow, setLoginShow] = useState(false);
    const [user, setUser] = useState(null)

    const onSearch = (value) => console.log(value);

    useEffect(() => {
        const docRef = doc(db, "user", cookies.email);
        getDoc(docRef)
            .then(resp => {
                setUser({
                    id: resp.id,
                    fields: resp._document.data.value.mapValue.fields
                })
            });
    }, []);
    
    return (
        <header>
            <div className="mw">
                <h2>Logo</h2>
                <Search placeholder="input search text" onSearch={onSearch} />
                <>
                    <Button>Thông báo</Button>
                    <Button>Giỏ hàng</Button>
                    {cookies.isLogin && user && <Button>Hello {Object.values(user.fields.name)[0]}</Button>}
                    {!cookies.isLogin || !user && <Button onClick={() => setLoginShow(true)}>Đăng nhập</Button>}
                </>
            </div>
            {loginShow && <Login isShow={loginShow} setShow={setLoginShow} />}
        </header>
    );
};

export default Header;
