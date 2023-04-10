import React, { useCallback, useState } from 'react';
import './style.scss';
import { OldBookItem } from '../../components';
import { BookOutlined } from '@ant-design/icons';
import AddBook from './AddBook';
import { Button, Select, Row, Col } from 'antd';
const SellOldBook = () => {
    const fakeData = [
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

    ]
    const [isAddBookVisible, setIsAddBookVisible] = useState(false);
    const handleCloseAddBook = useCallback(() => {
        setIsAddBookVisible(false)
    })

    return (
        <div className="sell-old-book">
            <div className="title">
                <div className="icon">
                    <BookOutlined />

                </div>
                <span className="sub-title">Danh sách sách cũ đang đăng bán</span>
            </div>

            <div className="action">
                <div className="filter">
                    <div className="name">Bộ lọc</div>
                    <Select
                        
                        style={{width: 120}}
                        options={[
                            {    
                                value: "is_sold",
                                label: "Đã bán"
                            },
                            {    
                                value: "not_sold",
                                label: "Chưa bán"
                            },
                        ]}
                    />
                </div>
                <Button
                    onClick={() => setIsAddBookVisible(true)}
                    type="primary"
                >  Thêm sách</Button>
                <AddBook
                    onClose={handleCloseAddBook}
                    isModalVisible={isAddBookVisible}
                />
            </div>
            <Row gutter={36}>

                {
                    fakeData.map((item, index) => (
                        <Col lg={6} md={8} sm={12} xs={24} key={index}>
                            <OldBookItem
                                item={item}
                                
                            />
                        
                        </Col>
                    ))
                }     
            </Row>
        </div>
    );
};

export default SellOldBook;
