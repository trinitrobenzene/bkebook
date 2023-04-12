import React from 'react';
import './style.scss';
import { Button, Input, InputNumber, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const OldBookItem = ({ item }) => {
    return (
        <div className="old-book-item">
            <img src={item.imgUrl} alt="book" />
            <form className="info">
                <div>
                    <div className="d-flex justify-content-between">
                        <label>Tên sách</label>
                        <span className="text-gray">BookID: {item.id}</span>
                    </div>
                    <Input value={item.name} />
                </div>
                <div>
                    <label>Tác giả</label>
                    <Input value={item.authors.join()} />
                </div>
                <div className="row">
                    <div className="col">
                        <label>Giá</label>
                        <InputNumber value={item.price} />
                    </div>
                    <div className="col">
                        <label>Số lượng còn lại</label>
                        <InputNumber value={item.amount} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>Năm xuất bản</label>
                        <InputNumber value={item.public.year} />
                    </div>
                    <div className="col">
                        <label>Nhà xuất bản</label>
                        <Input value={item.public.publisher} />
                    </div>
                </div>
                <div>
                    <label>Mô tả</label>
                    <TextArea value={item.description} />
                </div>
                <div className="action-item">
                    <Button type="primary" className="update">
                        Cập nhật
                    </Button>
                    <Button className="delete">Xoá</Button>
                </div>
            </form>
        </div>
    );
};

export default OldBookItem;
