import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Button, Rate, Carousel } from 'antd';
import { PlusCircleTwoTone, MinusCircleTwoTone } from '@ant-design/icons';
import { Rating } from '../../components';
import { getBook } from '../../utils/connect';

import './productdetail.css';

function BookDetail() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const aiStyle = { color: '#2F70AF', marginLeft: '5px' };

    // get data of book
    useEffect(() => {
        getBook(id, setBook);
    }, [id]);

    const handleDecrease = () => setQuantity(quantity > 0 ? quantity - 1 : 0);
    const handleIncrease = () => setQuantity(quantity + 1);

    return (
        <div className="book-detail">
            <Row className="py-4">
                <Col span={8} className="pr-4">
                    <img
                        className="w-100"
                        src={book?.imgUrl}
                        alt={book?.name}
                    />
                    {/* <Carousel
                        autoplay
                        dots
                        infinite
                        speed={10}
                        slidesToShow={3}
                        slidesToScroll={1}
                    >
                        <div style={{ width: '50%', height: '150px' }}>
                            <img
                                style={{
                                    objectFit: 'cover',
                                    width: '75%',
                                    height: '150px',
                                }}
                                src={book.image}
                                alt="image1"
                            />
                        </div>
                        <div style={{ width: '50%', height: '150px' }}>
                            <img
                                style={{
                                    objectFit: 'cover',
                                    width: '75%',
                                    height: '150px',
                                }}
                                src={book.image}
                                alt="image2"
                            />
                        </div>
                        <div style={{ width: '50%', height: '150px' }}>
                            <img
                                style={{
                                    objectFit: 'cover',
                                    width: '75%',
                                    height: '150px',
                                }}
                                src={book.image}
                                alt="image3"
                            />
                        </div>
                        <div style={{ width: '50%', height: '150px' }}>
                            <img
                                style={{
                                    objectFit: 'cover',
                                    width: '75%',
                                    height: '150px',
                                }}
                                src={book.image}
                                alt="image3"
                            />
                        </div>
                        <div style={{ width: '50%', height: '150px' }}>
                            <img
                                style={{
                                    objectFit: 'cover',
                                    width: '75%',
                                    height: '150px',
                                }}
                                src={book.image}
                                alt="image3"
                            />
                        </div>
                    </Carousel> */}
                </Col>
                <Col span={16} style={{ marginTop: '40px' }}>
                    <h1>{book?.name}</h1>
                    <p className="text">
                        Nhà xuất bản: {book?.public.publisher}
                    </p>
                    <p className="text">Năm xuất bản: {book?.public.year}</p>
                    <p className="text">
                        Thể loại:{' '}
                        {book?.tags.map((tag, i) => (
                            <span style={aiStyle} key={i}>
                                {tag},
                            </span>
                        ))}
                    </p>
                    <p className="text">
                        Tác giả:
                        {book?.authors.map((author, i) => (
                            <span style={aiStyle} key={i}>
                                {author},
                            </span>
                        ))}
                    </p>
                    <Rate disabled defaultValue={5} />
                    <h3 className="my-3"> {book?.price} Đ </h3>
                    <div className="d-flex align-items-center my-3">
                        <MinusCircleTwoTone
                            className="icon-24"
                            onClick={handleDecrease}
                        />
                        <h4 className="px-4" style={{ marginBottom: 0 }}>
                            {quantity}
                        </h4>
                        <PlusCircleTwoTone
                            className="icon-24"
                            onClick={handleIncrease}
                        />
                    </div>
                    <p className="text">Số lượng còn lại: {book?.amount}</p>
                    <div style={{ display: 'flex', marginTop: '10px' }}>
                        <Button
                            style={{
                                backgroundColor: '#2F70AF',
                                width: '150px',
                            }}
                        >
                            Mua ngay
                        </Button>
                        <Button style={{ marginLeft: '5px' }}>
                            Thêm vào giỏ hàng
                        </Button>
                    </div>
                </Col>
            </Row>

            <div className="header-detail">
                <p className="text-title">MÔ TẢ CHI TIẾT</p>
            </div>
            <p className="text"> {book?.description}</p>
            <Rating />
        </div>
    );
}

export default BookDetail;
