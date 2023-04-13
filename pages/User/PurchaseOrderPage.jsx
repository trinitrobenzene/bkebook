import { Divider } from 'antd';
import React from 'react'
import OrderItem from '../../components/History/OrderItem';
import { useGlobalCtx } from '../../components/GlobalContext';

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
  ]
  const {globalUser} = useGlobalCtx();
  console.log(globalUser)


  return (
    <div className="history">
        <Divider orientation="left">LỊCH SỬ MUA HÀNG</Divider>
        {
          globalUser && globalUser.purchase.map((item, index) => (
            <OrderItem order={item} key={index}/>
          ))
        }

    </div>
  )
}

export default PurchaseOrderPage