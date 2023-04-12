import { Form, Row, Input, Button, Radio, Col, DatePicker, Space, Upload, Image,Divider } from 'antd'
import React, { useState } from 'react'

const ProfilePage = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ height: "100vh", backgroundColor: "white", color: "black", }}>
      <Divider orientation="left">HỒ SƠ CỦA TÔI</Divider>
      
      <Row>
        <Col span={12} style={{ borderRight: "1px solid #ccc" }}>
          <Form
            labelCol={{span: 4}}
          >
            <Form.Item label="Họ và tên">
              <Input placeholder="Nhập tên" style={{ width: "70%" }} />
            </Form.Item>
            <Form.Item label="Email" >
              <Input placeholder="bookstore@hcmut.edu.vn" style={{ width: "70%" }} />
            </Form.Item>
            <Form.Item label="SĐT">
              <Input placeholder="0908456053" style={{ width: "70%" }} />
            </Form.Item>
            <Form.Item label="Giới tính" name="layout">
              <Radio.Group >
                <Radio value="male">Nam</Radio>
                <Radio value="female">Nữ</Radio>
                <Radio value="other">Khác</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Ngày sinh">
              <Space direction="horizontal">
                <DatePicker picker="date" placeholder="Chọn ngày" />
              </Space>
            </Form.Item>
            <Form.Item
              wrapperCol={{offset: 4}}
            >
              <Button type="primary">Cập nhật thông tin</Button>
            </Form.Item>
          </Form>
        </Col>

        <Col span={12}>
          <Row style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            margin:"10px 0",
          }} >
            <Image
              preview={{ visible: false }}
              width={200}
              src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
              onClick={() => setVisible(true)}
              style={{borderRadius: '10%'}} 
            />
            <div style={{ display: 'none' }}>
              <Image.PreviewGroup
                preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
              >
                <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
              </Image.PreviewGroup>
            </div>
          </Row>
          <Row style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            margin:"10px 0",
          }}>
          <Button>Chọn Ảnh</Button>
          </Row>
          <Row style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            color: "#cccccc",
            margin:"10px 0"
          }}>
            <div >
              <p>Dụng lượng file tối đa 1 MB</p>
              <p>Định dạng:.JPEG, .PNG </p>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ProfilePage