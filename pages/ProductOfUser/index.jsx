import { Card, Carousel, Row, Col, Button, Avatar, Rate } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getBooks } from '../../utils/connect';
import { useGlobalCtx } from '../../components/GlobalContext';
import './style.scss';

const ProductOfUser = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const { addToCart } = useGlobalCtx();
    useEffect(() => getBooks(setBooks), []);
    const add = (id) => {
        addToCart(id);
    };
    return (
        <div>
            <div style={{ marginTop: '25px', padding: 20, justifyContent: 'center', margin: 'auto',
  textAlign: 'center',}}>
                <Avatar style={{  backgroundColor: '#fde3cf', color: '#f56a00' }} size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}>NVA</Avatar>
                <h3 style={{  margin: 20 }}>Nguyễn Văn A</h3>
                <p>Số lượng sản phẩm: 18</p>
                <Rate disabled defaultValue={5} />
            </div>
            <div className="header">
                <p className="text-title">DANH MỤC SẢN PHẨM</p>
            </div>
            <div className="booklist">
                {books.map((product) => (
                    <Card key={product.id}>
                        <div className="grow-1">
                            <img
                                alt={product.name}
                                src={product.imgUrl}
                                onClick={() =>
                                    navigate('/detail/' + product.id)
                                }
                            />
                            <h6>
                                <Link to={'/detail/' + product.id}>
                                    {product.name}
                                </Link>
                            </h6>
                            <p>{product.price} Đ</p>
                        </div>
                        <Button
                            type="primary"
                            onClick={() => add(product.id)}
                        >
                            Thêm vào giỏ hàng
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ProductOfUser;