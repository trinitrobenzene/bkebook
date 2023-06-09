import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Dropdown, Input, Space } from 'antd';
import { CaretDownFilled } from '@ant-design/icons';
import Cookies from 'js-cookie';
import { DownOutlined } from '@ant-design/icons';
import './style.scss';
import Authen from '../../pages/Login';
import Drop from './dropdown';
// import Logo from '../../public/bkebook_logo.png';
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

    
    return (
        <header>
            <div className="mw header-container">
                <Link to="/">
                    <img src="./bkebook_logo.png" className="logo-header" alt="logo"/>
                </Link>
                <Drop/>
                <Search  placeholder="" onSearch={onSearch} />
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

export default React.memo(Header);