import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Dropdown, Input, Space } from 'antd';
import { db } from '../../firebase-config';
import { doc, getDoc } from 'firebase/firestore';
<<<<<<< HEAD
import { CaretDownFilled } from '@ant-design/icons';
import Cookies from 'js-cookie';
=======
import { CaretDownFilled, ShoppingCartOutlined  } from '@ant-design/icons';
import Cookies from 'js-cookie'
>>>>>>> a10b7a83766f3bf4732aec75fa114e7ae3bba0d7

import './style.scss';
import Authen from '../../pages/Login';
import { handleLogout } from '../../utils/authen';
import { getUserInfo } from '../../utils/connect';
import { useGlobalCtx } from '../GlobalContext';

const { Search } = Input;


const Header = () => {
    const navigate = useNavigate();
    const cEmail = Cookies.get('email');
    const cLogin = Cookies.get('isLogin');
    const [loginShow, setLoginShow] = useState(false);
    const { globalUser, setUser, setCart } = useGlobalCtx();

    const onSearch = (value) => console.log(value);
    const logout = () => {
        handleLogout();
        navigate('/');
        setUser(null);
        setCart([]);
    };
    const items = [
        {
            key: 0,
            label: <Link to="/user">Thông tin cá nhân</Link>,
        },
        {
            key: 1,
            label: <span onClick={logout}>Đăng xuất</span>,
        },
    ];

    useEffect(() => {
        if (!cEmail) return;
        getUserInfo(cEmail, setUser);
    }, [cEmail]);

    console.log(globalUser);

    return (
        <header>
            <div className="mw">
                <Link to="/">
                    <h2>Logo</h2>
                </Link>
                <Search placeholder="input search text" onSearch={onSearch} />
                <Button onClick={() => navigate('/cart')}>Giỏ hàng</Button>
                {cLogin && globalUser && (
                    <Dropdown menu={{ items }} trigger={['click']}>
                        <Button>
                            <Space>
                                <span>Chào {globalUser.name}</span>
                                <CaretDownFilled />
                            </Space>
                        </Button>
                    </Dropdown>
                )}
                {!cLogin && (
                    <Button onClick={() => setLoginShow(true)}>
                        Đăng nhập
                    </Button>
                )}
            </div>
            {loginShow && <Authen isShow={loginShow} setShow={setLoginShow} />}
        </header>
    );
};

export default Header;
