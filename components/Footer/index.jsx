import React from 'react';
import './style.scss';
import {
    FacebookOutlined,
    InstagramOutlined,
    LinkedinOutlined,
} from '@ant-design/icons';

import { Row, Col } from 'antd';

export default function Footer() {
    return (
        <footer>
<<<<<<< HEAD
            <Row className="mw">
                <Col xs={24} md={12} lg={6}>
                    <h3>Dịch vụ</h3>
                    <ul>
                        <li>
                            <a href="#">Điều khoản sử dụng</a>
                        </li>
                        <li>
                            <a href="#">Chính sách bảo mật thông tin cá nhân</a>
                        </li>
                        <li>
                            <a href="#">Chính sách bảo mật thanh toán</a>
                        </li>
                    </ul>
                </Col>
                <Col xs={24} md={12} lg={6}>
                    <h3>Hỗ trợ</h3>
                    <ul>
                        <li>
                            <a href="#">Chính sách vận chuyển</a>
                        </li>
                        <li>
                            <a href="#">
                                Phương thức thanh toán và xuất hóa đơn
                            </a>
                        </li>
                        <li>
                            <a href="#">Thông tin hữu ích</a>
                        </li>
                    </ul>
                </Col>
                <Col xs={24} md={12} lg={6}>
                    <h3> Liên hệ</h3>
                    <ul>
                        <li>Email:bookstore@hcmut.edu.vn</li>
                        <li>Điện thoại:1800 1801</li>
                        <li style={{ justifyContent: 'space-between' }}>
                            <FacebookOutlined />
                            <InstagramOutlined />
                            <LinkedinOutlined />
                        </li>
                    </ul>
                </Col>
                <Col xs={24} md={12} lg={6}>
                    <h3>Logo</h3>
                </Col>
            </Row>
=======
            {/* <Container fluid> */}
                <Row className='mw'>
                    <Col xs={24} md={12} lg={6}>
                        <h3>Dịch vụ</h3>
                        <ul>
                            <li><a href="#">Điều khoản sử dụng</a></li>
                            <li><a href="#">Chính sách bảo mật thông tin cá nhân</a></li>
                            <li><a href="#">Chính sách bảo mật thanh toán</a></li>
                        </ul>
                    </Col>
                    <Col xs={24} md={12} lg={6}>
                        <h3>Hỗ trợ</h3>
                        <ul>
                            <li><a href="#">Chính sách vận chuyển</a></li>
                            <li><a href="#">Phương thức thanh toán và xuất hóa đơn</a></li>
                            <li><a href="#">Thông tin hữu ích</a></li>
                        </ul>
                    </Col>            
                    <Col xs={24} md={12} lg={6}>
                        <h3> Liên hệ</h3>
                        <ul>
                            <li>Email: bookstore@hcmut.edu.vn</li>
                            <li>Điện thoại: 1800 1801</li>
                            <li style={{display:"flex", gap:12}} className='mt-2'>
                                    <FacebookOutlined style={{fontSize: 48}}/>
                                    <InstagramOutlined style={{fontSize: 48}}/>                        
                                    <LinkedinOutlined style={{fontSize: 48}}/>
                            </li>
                        </ul>
                    </Col>               
                    <Col xs={24} md={12} lg={6}>
                        <h3>Logo</h3>
                    </Col>
                </Row>
            {/* </Container> */}
>>>>>>> master
        </footer>
    );
}
