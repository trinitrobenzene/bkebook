import React, { useState, useEffect } from 'react';
import { useCookies } from "react-cookie";
import { Button, Dropdown, Input, Space } from 'antd';
import { db } from '../../firebase-config';
import { doc, getDoc } from 'firebase/firestore';

import './style.scss';
import Authen from '../../pages/Login';
const { Search } = Input;

const Header = () => {
    const [cookies, setCookie] = useCookies(['isLogin']);
    const [loginShow, setLoginShow] = useState(false);
    const [user, setUser] = useState(null)

    const onSearch = (value) => console.log(value);

    const items = [
        {
            key: 0,
            label: 'Thông tin cá nhân',
        },
        {
            key: 1,
            label: 'Đăng xuất',
        }
    ]

    useEffect(() => {
        if (!cookies.email) return;
        const docRef = doc(db, "user", cookies.email);
        getDoc(docRef).then(resp => {
            setUser({
                id: resp.id,
                fields: resp._document.data.value.mapValue.fields
            })
        });
    }, [cookies.email]);

    return (
        <header>
            <div className="mw">
                <h2>Logo</h2>
                <Search placeholder="input search text" onSearch={onSearch} />
                <>
                    <Button>Thông báo</Button>
                    <Button>Giỏ hàng</Button>
                    {cookies.isLogin && user && <Dropdown
                        menu={{ items }}
                        trigger={['click']}
                    >
                        <Button>
                            <Space>
                                Hello { }
                                {/* <DownOutlined /> */}
                            </Space>
                        </Button>
                    </Dropdown>}
                    {!cookies.isLogin && <Button onClick={() => setLoginShow(true)}>Đăng nhập</Button>}
                </>
            </div>
            {loginShow && <Authen isShow={loginShow} setShow={setLoginShow} />}
        </header>
    );
};

export default Header;
