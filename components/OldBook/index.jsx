import React from 'react';
import './style.scss';
import {Button} from "antd";

const OldBookItem = ({item}) => {
    return (
        <div className="old-book-item">
            <img src="/book.png" alt="book"/>
            <div className="info-item">
                <div className="name">{item.name || ""}</div>
                <div className="price">{item.price || ""} Đ</div>
                <div className="date">Ngày đăng bán: {item.date || ""}</div>
                <div className="status">Trạng thái: <span>{item.is_sold? "Đã bán": "Chưa bán"}</span></div>

            </div>
            <div className="action-item">
                <Button
                    type="primary"
                    className="update"
                >
                    Cập nhật
                </Button>
                <Button
                    className="delete"
                >
                    Xoá
                </Button>
            </div>
        </div>
    );
};

export default OldBookItem;
