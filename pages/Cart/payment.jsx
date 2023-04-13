import { Button, Form, Input } from 'antd';
import React, { useRef } from 'react';
import './payment.scss';

const Payment = () => {
    const pay = () => {
        const order = paymentForm.current;
        const name = order['name'].value;
        const address = order['address'].value;

        console.log(name, address);
    };
    const paymentForm = useRef(null);
    return (
        <div className="payment">
            <form ref={paymentForm}>
                <h3>Đơn hàng của bạn</h3>
                <Form.Item label="Họ tên">
                    <input name="name" />
                </Form.Item>
                <Form.Item label="Địa chỉ">
                    <input name="address" />
                </Form.Item>
                <Form.Item>
                    <Button onClick={pay}>Đồng ý</Button>
                </Form.Item>
            </form>
            <div>Some thing like this.</div>
        </div>
    );
};

export default Payment;
