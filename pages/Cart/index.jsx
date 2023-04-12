import { useState, useEffect } from 'react';
import {
    DeleteFilled,
    PlusCircleOutlined,
    MinusCircleOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import './style.css';
import { useGlobalCtx } from '../../components/GlobalContext';
import { getBookInCart } from '../../utils/connect';
import { Link } from 'react-router-dom';

const CartData = ({ item }) => {
    const {detail, number} = item;
    const [count, setCount] = useState(number);
    var itemTotal = detail.price * count;
    return (
        <div className="product">
            <div className="product-img">
                <input type="checkbox" />
                <Link to={'/detail/'+detail.id}>
                    <img src={detail.imgUrl} />
                </Link>
            </div>
            <div>
                <div>
                    <Link to={'/detail/'+detail.id}>{detail.name}</Link>
                </div>
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
                <span>{itemTotal}</span>
                <DeleteFilled onClick={() => setCount(0)} className='mx-3'/>
            </div>
        </div>
    );
};

const DiscountData = ({ item }) => {
    return (
        <div className="coupon">
            <div className="i8">{item.name} </div>
            <div className="i5">
                <a href="#">Chi tiết &gt; </a>
            </div>
            <div className="i2">{item.detail} </div>
            <div className="i7">{item.dk}</div>
            <Button type="primary">{item.use}</Button>
        </div>
    );
};

const Cart = () => {
    const {globalCart} = useGlobalCtx();
    const [count, setCount] = useState(0);
    const [count0, setCount0] = useState(1);
    const [count1, setCount1] = useState(1);
    const [total, setTotal] = useState(0);
    const [localCart, setLocalCart] = useState([]);

    useEffect(() => {
        getBookInCart(globalCart, setLocalCart);
    }, [])
    const subtotal0 = (count, price) => {
        return count * price;
    };
    const cartData = [
        {
            id: 'book01',
            name: 'Sword Art Online Progressive Vol 7',
            price: '120000',
            qty: 1,
            image: 'https://cdn0.fahasa.com/media/catalog/product/s/a/sao-pro-7---bia-1.jpg',
        },
        {
            id: 'book02',
            name: 'Sword Art Online Progressive Vol 8',
            price: '108000',
            qty: 1,
            image: 'https://cdn0.fahasa.com/media/catalog/product/s/a/sao-p8---bia-1.jpg',
        },
        {
            id: 'book03',
            name: 'Vật Lý Đại Cương A1',
            price: 120000,
            qty: 1,
            image: '/book.png',
        },
    ];
    const discountData = [
        {
            id: 'coupon01',
            name: 'MÃ GIẢM 20%',
            detail: 'Cho đơn hàng từ 720K - Không áp dụng cho Phiếu Quà Tặng - Hiệu lực ngày 20.12.2022 - 27.12.2022',
            avail: false,
            use: 'Mua Thêm',
            dk: 'Mua thêm 300.000Đ để nhận mã',
        },
        {
            id: 'coupon02',
            name: 'MÃ MIỄN PHÍ GIAO HÀNG',
            detail: 'Cho đơn hàng từ 500K - Không áp dụng cho Phiếu Quà Tặng - Hiệu lực ngày 21.12.2022',
            avail: true,
            use: 'Áp dụng',
            dk: 'Đã thỏa mãn điều kiện áp dụng',
        },
    ];
    const item0 = cartData[0];
    const item1 = cartData[1];
    const cp0 = discountData[0];
    const cp1 = discountData[1];

    return (
        <div className="container">
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
            <div>
                <h3>Giỏ hàng</h3> ({item0.qty + item1.qty} sản phẩm)
            </div>
            <div className="cart">
                <div className="title">
                    <div className="i1">
                        <input type="checkbox" />
                        Chọn tất cả{' '}
                    </div>
                    <div className="i6">Số lượng </div>
                    <div className="i6">Thành tiền </div>
                </div>
                <div className="product-list">
                    {localCart.length > 0 && localCart.map((item, index) => (
                        <CartData item={item} key={index} />
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
                            <DiscountData item={item} key={index} />
                        ))}
                    </div>
                    <div className="sub-footer">
                        <div>Có thể áp dụng đồng thời nhiều mã </div>
                    </div>
                </div>
                <div className="total">
                    <div>Thành tiền </div>
                    <div className="i5">
                        {item0.price * count0 + item1.price * count1}
                    </div>
                    <div className="i12">Tổng số tiền (gồm VAT) </div>
                    <div className="i5 i12">
                        {item0.price * count0 + item1.price * count1}{' '}
                    </div>
                    <button className="i3 i10">THANH TOÁN</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
