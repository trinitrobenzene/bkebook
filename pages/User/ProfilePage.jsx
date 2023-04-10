import { Form, Row, Input, Button, Radio, Col, DatePicker, Space } from 'antd'
import React from 'react'

const ProfilePage = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "white", color: "black", }}>
      <Row>
        <h3>Hồ Sơ Của Tôi</h3>
      </Row>
        <hr style={{display: 'block',
          height: '1px',
          border: '0',
          borderTop: '1px solid #ccc',
          margin: '1em 1em',
          padding: '1em'}}/>
      <Row>
        <Col span={12} style={{borderRight:"1px solid #ccc"}}>
          <Form>
            <Form.Item label="Họ và tên">
              <Input placeholder="input placeholder" style={{ width: "50%" }} />
            </Form.Item>
            <Form.Item label="Email" >
              <Input placeholder="bookstore@hcmut.edu.vn" style={{ width: "50%" }} />
            </Form.Item>
            <Form.Item label="SĐT">
              <Input placeholder="0908456053" style={{ width: "50%" }} />
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
            <Form.Item>
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12} style={{display:"flex",justifyContent:"center"}}>
          <h2>Avatar</h2>
        </Col>
      </Row>
    </div>
  )
}

export default ProfilePage