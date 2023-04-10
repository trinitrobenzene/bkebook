import React from "react";
import { Divider } from 'antd';
import SellOrderItem from "../../components/History/SellOrderItem";
function SellOrderPage() {
    const fakeData = [
        {
            date: '27/02/2022',
            status: 'success',
            method: 'Zalopay',
            customer: {
                name: 'Vladilena Milize',
                phone: '123456789',
                email: 'abc@gmail.com',
                address: 'Thành phố Hồ Chí Minh'
            },
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
            customer: {
                name: 'Vladilena Milize',
                phone: '123456789',
                email: 'abc@gmail.com',
                address: 'Thành phố Hồ Chí Minh'
            },
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




    return(<div className="history">
        <Divider
          orientation="left"
        >
          LỊCH SỬ BÁN HÀNG
        </Divider>
        {
          fakeData.map((item, index) => (
            <SellOrderItem order={item} key={index}/>
          ))
        }
    </div>)
}
export default SellOrderPage;