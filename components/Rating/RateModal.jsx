import React, { memo, useState } from "react";
import {Modal, Input, Rate} from "antd";
const { TextArea } = Input;

function RateModal({isModalVisible, onClose}) {
    const [point, setPoint] = useState(0);
    const [content, setContent] = useState('');
    const handleRate = () => {
        const data = {
            point, 
            content
        }
        console.log(data)
    }
    return(
        <Modal
            width={600}
            title="Viết đánh giá sản phẩm"
            okText="Đăng"
            cancelText="Huỷ bỏ"
            open={isModalVisible}
            onCancel={onClose}
            onOk={handleRate}
            className="rate-modal"
        >
            <Rate
                count={5}
                onChange={value => setPoint(value)}
            />
            <TextArea
                placeholder="Nhập nội dung đánh giá"
                onChange={e => setContent(e.target.value)}
                style={{height: 120}}
            />
            
        </Modal>
    )
}
export default memo(RateModal)