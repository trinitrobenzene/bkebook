import React, { memo, useState } from 'react';
import { Modal, Form, Input, Select, Upload, InputNumber, Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { createBook } from '../../utils/connect';

function AddBook({ onClose, isModalVisible }) {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [authors, setAuthors] = useState([]);
    const [publisher, setPublisher] = useState('');
    const [tags, setTags] = useState([]);
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
    const [img, setImg] = useState('');
    const [msg, setMsg] = useState('');

    const handleAddBook = () => {
        const book = {
            name,
            authors,
            tags,
            amount,
            price,
            imgUrl: img,
            public: { publisher, year: 2021 },
            year: 2021,
            description: desc,
            sellerID: 'admin@mail.com',
        };

        createBook(book, (msg) => {
            setMsg(msg);
            onClose();
        });
    };

    return (
        <Modal
            title="Thêm sách cũ"
            onOK={onClose}
            onCancel={onClose}
            open={isModalVisible}
            footer={msg}
            width={600}
        >
            <Form labelCol={{ span: 6 }}>
                <Form.Item
                    label="Tên sách"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tên sách!',
                        },
                    ]}
                >
                    <Input
                        placeholder="Nhập tên sách"
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Thể loại" name="category">
                    <Input placeholder="Nhập thể loại" />
                </Form.Item>
                <Form.Item label="Tác giả" name="authors">
                    <Input
                        placeholder="Một hoặc nhiều tác giả..."
                        onChange={(e) => setAuthors(e.target.value.split())}
                    />
                </Form.Item>
                <Form.Item
                    label="Giá sách"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập giá!',
                        },
                    ]}
                >
                    <Input
                        type="number"
                        min={0}
                        addonAfter="đồng"
                        onChange={(e) => setPrice(e.target.value * 1)}
                    />
                </Form.Item>
                <Form.Item
                    label="Số lượng"
                    name="amount"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập số lượng!',
                        },
                    ]}
                >
                    <Input
                        type="number"
                        min={0}
                        onChange={(e) => setAmount(e.target.value * 1)}
                    />
                </Form.Item>
                <Form.Item label="Nhà xuất bản" name="publisher">
                    <Input
                        placeholder="Nhà xuất bản/nhà phân phối"
                        onChange={(e) => setPublisher(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Năm xuất bản" name="year">
                    <Input value="2021" />
                </Form.Item>
                <Form.Item label="Ảnh đính kèm" name="attachment">
                    <Input
                        placeholder="Link ảnh minh họa"
                        onChange={(e) => setImg(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Mô tả" name="description">
                    <TextArea onChange={(e) => setDesc(e.target.value)} />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 6 }}>
                    <Button type="primary" onClick={handleAddBook}>
                        Đăng bán
                    </Button>
                    <Button onClick={onClose} className="ml-2">
                        Huỷ bỏ
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}
export default memo(AddBook);
