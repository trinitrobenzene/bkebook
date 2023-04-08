import { Divider } from 'antd';
import React from 'react'
import OrderItem from '../../components/History/OrderItem';

const PurchaseOrderPage = () => {
  const fakeData = [
    {
      date: '27/02/2022',
      status: 'success',
      method: 'Zalopay',
      items: [
        {
          name: 'Vật Lý Đại Cương 1',
          publisher: 'Nhà xuất bản Đại học Quốc gia TP.HCM',
          count: 1,
          price: 120000,
        },
        {
          name: 'Sách Giải Tích',
          publisher: 'Nhà xuất bản Đại học Quốc gia TP.HCM',
          count: 2,
          price: 120000,
        },

      ]
    },
    {
      date: '27/02/2022',
      status: 'progress',
      method: 'Zalopay',
      items: [
        {
          name: 'Vật Lý Đại Cương 1',
          publisher: 'Nhà xuất bản Đại học Quốc gia TP.HCM',
          count: 1,
          price: 120000,
        },
      ]
    },
   
  ]


  return (
    <div className="history" style={{height:"100vh", backgroundColor:"White",color:"black"}}>
        <Divider
          orientation="left"
        >
          LỊCH SỬ MUA HÀNG
        </Divider>
        {
          fakeData.map((item, index) => (
            <OrderItem order={item} key={index}/>
          ))
        }

    </div>
  )
}

export default PurchaseOrderPage