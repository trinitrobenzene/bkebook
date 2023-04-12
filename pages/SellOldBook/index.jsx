import React, { useCallback, useState, useEffect } from 'react';
import { Button, Select, Row, Col, Divider } from 'antd';

import './style.scss';
import AddBook from './AddBook';
import { OldBookItem } from '../../components';
import { getBooksByUser } from '../../utils/connect';
import { useGlobalCtx } from '../../components/GlobalContext';

const SellOldBook = () => {
    /* const fakeData = [
        {
            name: 'Vật Lý Đại Cương A1',
            price: 120000,
            date: '30/03/2023',
            is_sold: true,
        },
        {
            name: 'Vật Lý Đại Cương A1',
            price: 120000,
            date: '30/03/2023',
            is_sold: true,
        },
        {
            name: 'Vật Lý Đại Cương A1',
            price: 120000,
            date: '30/03/2023',
            is_sold: true,
        },
        {
            name: 'Vật Lý Đại Cương A1',
            price: 120000,
            date: '30/03/2023',
            is_sold: true,
        },
        {
            name: 'Vật Lý Đại Cương A1',
            price: 120000,
            date: '30/03/2023',
            is_sold: true,
        },
        {
            name: 'Vật Lý Đại Cương A1',
            price: 120000,
            date: '30/03/2023',
            is_sold: true,
        },
    ]; */
    const [isAddBookVisible, setIsAddBookVisible] = useState(false);
    const handleCloseAddBook = useCallback(() => {
        setIsAddBookVisible(false);
    });
    const [myBooks, setMyBooks] = useState([]);
    const { globalUser } = useGlobalCtx();

    useEffect(() => {
        getBooksByUser(globalUser.email, setMyBooks);
    }, []);

    return (
        <div className="sell-old-book">
            <Divider orientation="left">
                <h3>Sách của tôi</h3>
            </Divider>
            <div className="action">
                <div className="filter">
                    <div className="name">Bộ lọc</div>
                    <Select
                        style={{ width: 120 }}
                        options={[
                            {
                                value: 'is_sold',
                                label: 'Đã bán',
                            },
                            {
                                value: 'not_sold',
                                label: 'Chưa bán',
                            },
                        ]}
                    />
                </div>
                <Button
                    onClick={() => setIsAddBookVisible(true)}
                    type="primary"
                >
                    Thêm sách
                </Button>
                <AddBook
                    onClose={handleCloseAddBook}
                    isModalVisible={isAddBookVisible}
                />
            </div>
            <Row gutter={36}>
                {myBooks.length > 0 &&
                    myBooks.map((item, index) => (
                        <OldBookItem item={item} key={index} />
                    ))}
            </Row>
        </div>
    );
};

export default SellOldBook;
