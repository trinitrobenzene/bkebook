import React from 'react';
import './style.scss';
import { Button, Input } from 'antd';
const { Search } = Input;

const Header = () => {
    const onSearch = (value) => console.log(value);
    return (
        <header>
            <div className="mw">
                <h2>Logo</h2>
                <Search placeholder="input search text" onSearch={onSearch} />
                <>
                    <Button>Thông báo</Button>
                    <Button>Giỏ hàng</Button>
                    <Button>Tài khoản</Button>
                </>
            </div>
        </header>
    );
};

export default Header;
