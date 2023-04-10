import React, {memo} from "react";
import { Modal, Form, Input, Select, Upload, InputNumber, Button } from "antd";

function AddBook({onClose, isModalVisible}) {
    return (
        <Modal
            title="Thêm sách cũ"
            onOK={onClose}
            onCancel={onClose}
            open={isModalVisible}
            footer={null}
            width={600}
        >
            <Form
                labelCol={{span: 6}}
            >
                <Form.Item
                    label="Tên sách"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tên sách!'
                        }
                    ]}
                >
                    <Input placeholder="Nhập tên sách"/>
                </Form.Item>
                <Form.Item
                    label="Thể loại"
                    name="category"
                   
                >
                    <Input placeholder="Nhập thể loại"/>
                </Form.Item>
                <Form.Item
                    label="Tình trạng sách"
                    name="status"
                   
                >
                    <Input placeholder="Nhập tình trạng sách"/>
                </Form.Item>
                <Form.Item
                    label="Giá sách"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập giá!'
                        }
                    ]}
                   
                >
                    <InputNumber
                        min={0}
                        addonAfter="đồng"
                    />
                </Form.Item>
                <Form.Item
                    label="Ảnh đính kèm"
                    name="attachment"
                   
                >
                    <Upload>
                        <Button>Thêm ảnh</Button>
                    </Upload>
                </Form.Item>
                <Form.Item
                    wrapperCol={{offset: 6}}
                >
                    <Button
                        type="primary"

                    >
                        Đăng bán
                    </Button>
                    <Button
                        onClick={onClose}
                        style={{marginLeft: 8}}

                    >
                        Huỷ bỏ
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}
export default memo(AddBook)