import React from 'react';
import './style.scss';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Search } = Input;


const Header = () => {
    const navigate = useNavigate();
    const onSearch = (value) => console.log(value);
    return (
        <header>
            <div className="mw">
                <h2>Logo</h2>
                <Search placeholder="input search text" onSearch={onSearch} />
                <>
                    <Button
                        onClick={() =>  navigate('/sell', {replace: true})}
                    >Bán sách</Button>
                    <Button
                        onClick={() => navigate('/cart', {replace: true})}
                    >Giỏ hàng</Button>
                    <Button
                        onClick={() => navigate('/user/profile', {replace: true})}
                    >Tài khoản</Button>
                </>
            </div>
        </header>
    );
};

export default Header;
