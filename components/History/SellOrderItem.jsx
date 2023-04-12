import React, {memo} from "react"
import { CarOutlined } from "@ant-design/icons"
import { Button, Divider, Descriptions } from "antd"
import "./history.scss"

function SellOrderItem({order}) {
    return (
    <div className="order-item">
        <div className="header">

            <div className="date">
                Ngày đặt hàng: {order.date || ""}
            </div>
            <div className={`status ${order.status}`}>
                <CarOutlined/>
                {
                    order.status === "success"? <span>Đơn hàng đã được giao thành công</span>
                    : <span>Đơn hàng đang giao</span>
                }
                
            </div>
        </div>
        <div className="content-order">
            <div className="customer">
                <Descriptions title="Thông tin khách hàng">
                    <Descriptions.Item label="Họ tên">{order?.customer?.name || ""}</Descriptions.Item>
                    <Descriptions.Item label="Số điện thoại">{order?.customer?.phone || ""}</Descriptions.Item>
                    <Descriptions.Item label="Địa chỉ">{order?.customer?.address || ""}</Descriptions.Item>
                    <Descriptions.Item label="Email">{order?.customer?.email || ""}</Descriptions.Item>
                </Descriptions>
            </div>
            <div className="list-item">
                {
                    order.items && order.items.map((item, index) => (
                    <div key={index}>
                        <div className="item">
                            <div className="info-item">
                                <img src="/book.png" alt="book"/>
                                <div className="info-book">
                                    <h3>{item.name || ""}</h3>
                                    <div className="publisher">{item.publisher || ""}</div>
                                    <div className="count">x {item.count || ""}</div>
                                </div>
                            </div>
                            <div className="price">Đơn giá: <span>{item.price || 0} Đ</span></div>
                        </div>
                        <Divider style={{marginTop: 6, marginBottom: 6}}/>
                    </div>))
                }
                
            </div>
        </div>
        <div className="payment">
            <div className="method">Phương thức thanh toán: <span>{order.method || ""}</span></div>
            <div className="total">Thành tiền: <span>{order.items.reduce((acc, curr) => acc + curr.price*curr.count, 0) || 0} Đ</span></div>
        </div>
        <Button type="primary">Xoá đơn hàng</Button>
    </div>
    )
}
export default memo(SellOrderItem);