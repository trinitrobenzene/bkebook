import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Dropdown, Input, Space } from 'antd';
import { db } from '../../firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import { CaretDownFilled } from '@ant-design/icons';
import Cookies from 'js-cookie'

import './style.scss';
import Authen from '../../pages/Login';
import { handleLogout } from '../../utils/authen';

const { Search } = Input;


const Header = () => {
    const navigate = useNavigate();
    const cEmail = Cookies.get('email');
    const cLogin = Cookies.get('isLogin');
    const [loginShow, setLoginShow] = useState(false);
    const [user, setUser] = useState(null)

    const onSearch = (value) => console.log(value);
    const logout = () => {
        handleLogout();
        navigate('/');
    }
    const items = [
        {
            key: 0,
            label: <Link to='/user'>Thông tin cá nhân</Link>,
        },
        {
            key: 1,
            label: <span onClick={logout}>Đăng xuất</span>,
        }
    ]

    useEffect(() => {
        if (!cEmail) return;
        const docRef = doc(db, "user", cEmail);
        getDoc(docRef).then(resp => {
            setUser({
                id: resp.id,
                ...resp.data()
            })
        });
    }, [cEmail]);

    return (
        <header>
            <div className="mw">
                <Link to='/'>
                    <h2>Logo</h2>
                </Link>
                <Search placeholder="input search text" onSearch={onSearch} />
                <Button onClick={() => navigate('/cart')}>Giỏ hàng</Button>
                {cLogin && user && <Dropdown menu={{ items }} trigger={['click']}>
                    <Button>
                        <Space>
                            <span>Chào {user.name}</span>
                            <CaretDownFilled />
                        </Space>
                    </Button>
                </Dropdown>}
                {!cLogin && <Button onClick={() => setLoginShow(true)}>Đăng nhập</Button>}
            </div>
            {loginShow && <Authen isShow={loginShow} setShow={setLoginShow} />}
        </header>
    );
};

export default Header;
