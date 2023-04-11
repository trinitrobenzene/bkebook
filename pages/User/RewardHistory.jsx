import { StarFilled } from '@ant-design/icons'
import { Divider, List, Button, Typography } from 'antd'
import React from 'react'

const RewardHistory = () => {
  const data = [
    {
      icon: <StarFilled />,
      title: "Branch A",
      timesptamp: "14:20 09/04/2023",
      point: '1000',
      type: 'buy',
    },
    {
      icon: <StarFilled />,
      title: "Branch A",
      timesptamp: "14:20 09/04/2023",
      point: '1000',
      type: 'buy',
    },
    {
      icon: <StarFilled />,
      title: "Branch A",
      timesptamp: "14:20 09/04/2023",
      point: '1000',
      type: 'buy',
    },
    {
      icon: <StarFilled />,
      title: "Branch A",
      timesptamp: "14:20 09/04/2023",
      point: '1000',
      type: 'sell',
    },
  ];
  return (
    <>
      <Divider orientation="left">Lịch sử tích điểm</Divider>
      <List
        header={
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <StarFilled style={{ color: '#f6a700', fontSize: "30px" }} />
              <h4 style={{ color: '#f6a700' }}>300 xu đang có</h4>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button type="text" style={{ color: '#f6a700' }} >Nhận thêm xu</Button>
            </div>
          </div>}
        // footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <div>
              <div>
                <Typography.Text style={{ color: '#f6a700' }}>{item.icon}</Typography.Text> {item.title}
              </div>
              <div>
                <Typography.Text style={{ color: '#f6a700' }}></Typography.Text> {item.timesptamp}
              </div>
            </div>
            <div>
              <Typography.Text style={{ color: '#f6a700' }}></Typography.Text> {item.point} xu
            </div>
          </List.Item>
        )}
      />
    </>
  )
}

export default RewardHistory