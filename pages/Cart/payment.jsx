import { Button, Collapse, Form, Input } from 'antd';
import React, { useRef, useState } from 'react';
import { useGlobalCtx } from '../../components/GlobalContext';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { createOrder } from '../../utils/connect';
import './payment.scss';

const cID =
    'AUe2Bb1ew2S7Q_0Ks9FWOUY1fa24WKLNh_prGBxE4ugYlgEjpaqut-F6g78mHqqKzoxo8Ikup7Fo6xPK';

const Payment = ({ cost, items, close }) => {
    const { globalUser, setCart } = useGlobalCtx();
    const pay = () => {
        const order = paymentForm.current;
        const data = {
            name: order['name'].value,
            address: order['address'].value,
            payMethod: order['method'].value,
            orderStatus: 'pending',
            orderItems: items.map((it) => ({ id: it.id, qty: it.amount })),
            totalPay: cost,
        };
        createOrder(data, globalUser.email, ()=>{
            close(false);
            setCart([]);
        });
    };
    const paymentForm = useRef(null);
    return (
        <div className="payment">
            <form ref={paymentForm}>
                <div>
                    <h3>Đơn hàng của bạn</h3>
                    <Form.Item label="Họ tên">
                        <input name="name" />
                    </Form.Item>
                    <Form.Item label="Địa chỉ">
                        <input name="address" />
                    </Form.Item>
                    <Form.Item label="Số điện thoại">
                        <input name="phone" />
                    </Form.Item>
                    <Form.Item label="Tổng số tiền">
                        <input name="price" value={cost} readOnly disabled />
                    </Form.Item>
                </div>
                <div className="d-flex flex-column justify-content-between">
                    <div>
                        <h4>Chọn hình thức thanh toán</h4>
                        <div className="d-flex align-items-center">
                            <input type="radio" value="cod" name="method" />
                            <label className="grow-1 ml-2">
                                Thanh toán khi nhận hàng
                            </label>
                        </div>
                        <div>
                            <p className="d-flex align-items-center">
                                <input
                                    type="radio"
                                    value="paypal"
                                    name="method"
                                />
                                <label className="grow-1 ml-2">Paypal</label>
                            </p>
                            <PayPalScriptProvider
                                options={{ 'client-id': cID }}
                            >
                                <PayPalButtons
                                    style={{ layout: 'horizontal' }}
                                />
                            </PayPalScriptProvider>
                        </div>
                    </div>
                    <Button
                        onClick={pay}
                        type="primary"
                        className="align-self-end w-100"
                    >
                        Thanh toán
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Payment;
