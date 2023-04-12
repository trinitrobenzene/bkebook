import { Card, Carousel, Row, Col, Button } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getBooks } from '../../utils/connect';
import { useGlobalCtx } from '../../components/GlobalContext';
import './product.css';

const ProductList = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const { setCart, globalCart } = useGlobalCtx();
    useEffect(() => getBooks(setBooks), []);
    const addToCart = (id) => {
        const newItem = { id, amount: 1 };
        if (globalCart.lenth === 0) {
            setCart([newItem]);
        } else {
            const match = globalCart.find((item) => item.id === id);
            match ? match.amount++ : setCart([newItem, ...globalCart]);
        }
    };
    return (
        <div>
            <div style={{ marginTop: '25px' }}>
                <Row>
                    <Col
                        span={16}
                        style={{ marginRight: '30px', marginLeft: '10px' }}
                    >
                        <Carousel
                            style={{
                                width: '100%',
                                height: '410px',
                                borderRadius: '10px',
                            }}
                            autoplay
                        >
                            <div>
                                <img
                                    src="https://sachsuthattphcm.com.vn/wp-content/uploads/2018/09/banner1.jpg"
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: '410px',
                                        borderRadius: '10px',
                                    }}
                                    alt="image1"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://sachsuthattphcm.com.vn/wp-content/uploads/2020/04/banner-sach-T4.2020-3.jpg"
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: '410px',
                                        borderRadius: '10px',
                                    }}
                                    alt="image2"
                                />
                            </div>
                            <div>
                                <img
                                    src="http://bibeco.vn/wp-content/uploads/2018/04/banner2-1.jpg"
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: '410px',
                                        borderRadius: '10px',
                                    }}
                                    alt="image3"
                                />
                            </div>
                        </Carousel>
                    </Col>
                    <Col span={7}>
                        <Row>
                            <img
                                style={{
                                    width: '400px',
                                    height: '200px',
                                    borderRadius: '10px',
                                }}
                                src="https://bizbooks.vn/uploads/images/2021/thang-3/banner300x207-lanh-dao.jpg"
                                alt="image4"
                            />
                        </Row>
                        <Row>
                            <img
                                style={{
                                    width: '400px',
                                    height: '200px',
                                    marginTop: '10px',
                                    borderRadius: '10px',
                                }}
                                src="https://bookish.vn/wp-content/uploads/2021/03/BANNER-BUY-RECEIVE-A-COOL-GIFT-1_1000x600-min.jpg"
                                alt="image4"
                            />
                        </Row>
                    </Col>
                </Row>
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
                            onClick={() => addToCart(product.id)}
                        >
                            Thêm vào giỏ hàng
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
