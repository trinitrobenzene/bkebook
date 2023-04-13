import React, {memo, useState, useEffect} from "react"
import { CarOutlined } from "@ant-design/icons"
import { Button, Divider, Descriptions } from "antd"
import "./history.scss"
import { getBook } from '../../utils/connect';

function SellOrderItem({order}) {
    console.log(order)
    return (
    <div className="order-item">
        <div className="header-item">

            <div className="date">
                Mã đơn hàng: {order?.id || ""}
            </div>
            <div className={`status ${order.orderStatus}`}>
                <CarOutlined/>
                {
                    order.orderStatus === "complete"? <span>Đơn hàng đã được giao thành công</span>
                    : <span>Đơn hàng đang giao</span>
                }
                
            </div>
        </div>
        <div className="content-order">
            <div className="customer">
                <Descriptions>
                    <Descriptions.Item label="Mã khách hàng">{order?.buyerId || ""}</Descriptions.Item>
                </Descriptions>
            </div>
            <div className="list-item">
            {
                order.orderItems && order.orderItems.map((item, index) => (
                <ProductItem item={item} key={index} />))
            }
                
            </div>
        </div>
        <div className="payment">
            <div className="method">Phương thức thanh toán: <span>{order.payMethod || ""}</span></div>
            <div className="total">Thành tiền: <span>{order?.totalPay || order?.total || 0} Đ</span></div>
        </div>
        <Button type="primary">Xoá đơn hàng</Button>
    </div>
    )
}
export default memo(SellOrderItem);



function ProductItem({item, key}) {
    const [book, setBook] = useState();
    useEffect(() => {
        getBook(item.id, setBook)
    }, [])
    return (
        <div key={key}>
            <div className="item">
                <div className="info-item">
                    <img src={book?.imgUrl || "/book.png"} alt="book"/>
                    <div className="info-book">
                        <h3>{book?.name || ""}</h3>
                        <div className="publisher">{book?.public?.publisher || ""}</div>
                        <div className="count">x {item?.qty || ""}</div>
                    </div>
                </div>
                <div className="price">Đơn giá: <span>{book?.price || 0} Đ</span></div>
            </div>
            <Divider style={{marginTop: 6, marginBottom: 6}}/>
        </div>
    )
}