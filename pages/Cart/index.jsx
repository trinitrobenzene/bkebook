import { useState, useEffect } from 'react';
import {
    DeleteFilled,
    PlusCircleOutlined,
    MinusCircleOutlined,
} from '@ant-design/icons';
import { Button, Divider, Modal } from 'antd';
import './style.css';
import { useGlobalCtx } from '../../components/GlobalContext';
import { getBookInCart } from '../../utils/connect';
import { Link, useNavigate } from 'react-router-dom';
import Payment from './payment';

const CartData = ({ item, callback }) => {
    const { detail, number } = item;
    const [count, setCount] = useState(number);
    const [check, setCheck] = useState(item.checked);
    const handleChecked = () => {
        item.checked = !check;
        item.number = count;
        callback(item.checked ? detail.price * count : -detail.price * count);
        setCheck(!check);
    };

    return (
        <div className="mb-4 product">
            <div className="d-flex">
                <input
                    type="checkbox"
                    className="mr-2"
                    onChange={handleChecked}
                    value={detail.id}
                />
                <Link to={'/detail/' + detail.id} className="m-auto">
                    <img src={detail.imgUrl} height="150px" />
                </Link>
            </div>
            <div className="text-center">
                <h5>
                    <Link to={'/detail/' + detail.id}>{detail.name}</Link>
                </h5>
                <div className="i4">{detail.price}</div>
            </div>
            <div className="qty">
                <MinusCircleOutlined
                    style={{ fontSize: 24 }}
                    onClick={() =>
                        setCount((count) => (count <= 0 ? 0 : count - 1))
                    }
                />
                {count}
                <PlusCircleOutlined
                    style={{ fontSize: 24 }}
                    onClick={() => setCount((count) => count + 1)}
                />
            </div>
            <div className="sub-total">
                <span>{detail.price * count}</span>
                <DeleteFilled onClick={() => setCount(0)} className="mx-3" />
            </div>
        </div>
    );
};

const DiscountData = ({ item, callback }) => {
    const navigate = useNavigate();
    const [isDisable, setIsDisable] = useState(false);
    const handleClick = (name) => {
        if (name === 'Mua thêm') navigate('/');
        else if (name === 'Áp dụng') {
            setIsDisable(true);
            if (item.cost.length === 1) callback(item.cost[0]);
            else callback(item.cost[1]);
        }
    };
    return (
        <div className="coupon">
            <div className="i8">{item.name} </div>
            <div className="i5">
                <a href="#">Chi tiết &gt; </a>
            </div>
            <div className="i2">{item.detail} </div>
            <div className="i7">
                {item.dk}
                <p className="text-gray">
                    {isDisable && 'Đã áp mã thành công'}
                </p>
            </div>
            <Button
                type="primary"
                onClick={() => handleClick(item.use)}
                disabled={isDisable}
            >
                {item.use}
            </Button>
        </div>
    );
};

const Cart = () => {
    const { globalCart } = useGlobalCtx();
    const [discount, setDiscount] = useState(0);
    const [total, setTotal] = useState(0);
    const [localCart, setLocalCart] = useState([]);
    const [open, setOpen] = useState(false);

    const setCartCost = (cost) => {
        setTotal(total + cost);
    };

    const applyDiscount = (value) => {
        setDiscount(value + discount);
    };

    useEffect(() => {
        getBookInCart(globalCart, setLocalCart);
    }, []);

    const discountData = [
        {
            id: 'coupon01',
            name: 'MÃ GIẢM 20%',
            detail: 'Cho đơn hàng từ 500K - Tối đa 100K - Không áp dụng cho Phiếu Quà Tặng',
            avail: false,
            use: 'Mua Thêm',
            dk: 'Mua thêm 300.000Đ để nhận mã',
            cost: [20, 100000],
        },
        {
            id: 'coupon02',
            name: 'MÃ GIẢM GIÁ 20k',
            detail: 'Cho khách hàng thân thiết - Không áp dụng cho Phiếu Quà Tặng',
            avail: true,
            use: 'Áp dụng',
            dk: 'Đã thỏa mãn điều kiện áp dụng',
            cost: [20000],
        },
    ];

    console.log(localCart)

    return (
        <>
            <Divider orientation="left">
                <h3>GIỎ HÀNG</h3>
            </Divider>
            <div className="container">
                <div className="cart">
                    <div className="title">
                        <div className="i1 text-center">Tên sách</div>
                        <div className="i6">Số lượng </div>
                        <div className="i6">Thành tiền </div>
                    </div>
                    <div className="product-list">
                        {localCart.length > 0 &&
                            localCart.map((item, index) => (
                                <CartData
                                    item={item}
                                    key={index}
                                    callback={setCartCost}
                                />
                            ))}
                    </div>
                </div>

                <div className="info">
                    <div className="discount">
                        <div className="sub-header">
                            <div className="i9">Khuyến mãi </div>
                            <div className="i5">
                                <a href="#">Xem thêm &gt; </a>
                            </div>
                        </div>
                        <div className="coupon-list">
                            {discountData.map((item, index) => (
                                <DiscountData
                                    item={item}
                                    key={index}
                                    callback={applyDiscount}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="total">
                        <div>Thành tiền </div>
                        <div className="i5">{total}</div>
                        <div className="i12">Tổng số tiền (gồm VAT) </div>
                        <div className="i5 i12">{total - discount}</div>
                        <button
                            className="i10 i3"
                            onClick={() => setOpen(true)}
                        >
                            THANH TOÁN
                        </button>
                    </div>
                </div>
            </div>
            <Modal
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width="70%"
                footer={null}
            >
                <Payment items={globalCart} cost={total} close={setOpen}/>
            </Modal>
        </>
    );
};

export default Cart;
