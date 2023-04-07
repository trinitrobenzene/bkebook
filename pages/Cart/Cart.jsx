import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Cart.css'

const CartData = (item) =>  {
  return (
  <div className="product">
    const [total, setItemTotal] = useState(0)
    <div className="product-img">
    <input type="checkbox" /> 
    <a href="#" target="_blank">
      <img src={item.image} />
    </a>
    </div>
    <div> <div><a href="#" target="_blank"> {item.name}</a></div> <br/>
    <div className="i4">{item.price} </div></div>
    <div className="qty">
    <button onClick={() => setCount((count) => count - 1)}> - </button>
      {count}
    <button onClick={() => setCount((count) => count + 1)}> + </button>
    </div>
    <div className="sub-total">{() => setItemTotal((itemTotal) => item.price * count)}{item.price * count}.000  
    <button class="btn"><i class="fa fa-trash"></i></button>
    </div>
  </div>
  );
}

function App() {
  const [count, setCount] = useState(0)
  const [count0, setCount0] = useState(1)
  const [count1, setCount1] = useState(1)
  const [total, setTotal] = useState(0)
  /*const [subtotal0, setItemTotal0] = useState(0)
  const [subtotal1, setItemTotal1] = useState(0)*/
const subtotal0=(count,price)=>{
 return(count*price)
}
  const cartData = [{
    id: "book01",
    name: "Sword Art Online Progressive Vol 7",
    price: "120.000",
    qty: 1,
    image: 'https://cdn0.fahasa.com/media/catalog/product/s/a/sao-pro-7---bia-1.jpg',
},
{
    id: "book02",
    name: "Sword Art Online Progressive Vol 8",
    price: "108.000",
    qty: 1,
    image: 'https://cdn0.fahasa.com/media/catalog/product/s/a/sao-p8---bia-1.jpg',
},
{
    id: "book03",
    name: "Sword Art Online Progressive Vol 8",
    price: "108.000",
    qty: 1,
    image: 'https://cdn0.fahasa.com/media/catalog/product/s/a/sao-p8---bia-1.jpg',
}
]
const discountData = [{
  id: "coupon01",
  name: "MÃ GIẢM 20%",
  detail: "Cho đơn hàng từ 720K - Không áp dụng cho Phiếu Quà Tặng - Hiệu lực ngày 20.12.2022 - 27.12.2022",
  avail: false,
  use: "Mua Thêm",
  dk: "Mua thêm 300.000Đ để nhận mã",
},
{
  id: "coupon02",
  name: "MÃ MIỄN PHÍ GIAO HÀNG",
  detail: "Cho đơn hàng từ 500K - Không áp dụng cho Phiếu Quà Tặng - Hiệu lực ngày 21.12.2022",
  avail: true,
  use: "Áp dụng",
  dk: "Đã thỏa mãn điều kiện áp dụng",
}
]
const item0 = cartData[0]
const item1 = cartData[1]
const cp0 = discountData[0]
const cp1 = discountData[1]
/*
          {cartData.map((item) => <CartData key={item.id} name={item.name} price={item.price} qty={item.qty} image={item.image} />)}
    <CartData item={cartData[1]} />
  )*/
  return (
    <div className="container">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div><h3>Giỏ hàng</h3> ({item0.qty+item1.qty} sản phẩm)</div>
      <div className="cart">
      <div className="title">
      <div className="i1"><input type="checkbox"/>
      Chọn tất cả </div>
        <div className="i6">Số lượng </div>
        <div className="i6">Thành tiền </div>
      </div>
      <div className="product-list">
      <div className="product">
        <div className="product-img">
        <input type="checkbox" /> 
        <a href="#" target="_blank">
          <img src={item0.image} />
        </a>
        </div>
        <div> <div><a href="#" target="_blank"> {item0.name}</a></div> <br/>
        <div className="i4">{item0.price} </div></div>
        <div className="qty">
        <button onClick={() => setCount0((count0) => count0 - 1)}> - </button>
          {count0}
        <button onClick={() => setCount0((count0) => count0 + 1)}> + </button>
        </div>
        <div className="sub-total">{() => setItemTotal0((subtotal0) => item0.price * count)}{item0.price * count0}.000  
        <button class="btn"><i class="fa fa-trash"></i></button>
        </div>
      </div>
      
      <div className="product">
        <div className="product-img">
        <input type="checkbox" /> 
        <a href="#" target="_blank">
          <img src={item1.image} />
        </a>
        </div>
        <div> <div><a href="#" target="_blank"> {item1.name}</a></div> <br/>
        <div className="i4">{item1.price} </div></div>
        <div className="qty">
        <button onClick={() => setCount1((count1) => count1 - 1)}> - </button>
          {count1}
        <button onClick={() => setCount1((count1) => count1 + 1)}> + </button>
        </div>
        <div className="sub-total">{() => setItemTotal1((subtotal1) => item1.price * count)}{item1.price * count1}.000  
        <button class="btn"><i class="fa fa-trash"></i></button>
        </div>
      </div>
      </div>

      </div>

      <div className="info">
      <div className="discount">
      <div className="sub-header">
        <div className="i9">Khuyến mãi </div>
        <div className="i5"><a href="#">Xem thêm &gt; </a></div>
       </div>
      <div className="coupon-list">
      <div className="coupon">
        <div className="i8">{cp0.name} </div>
        <div className="i5"><a href="#">Chi tiết &gt; </a></div>
        <div className="i2">{cp0.detail} </div>
        <div className="i7">{cp0.dk}</div>
        <button className="i10">{cp0.use}</button>
      </div>
      <div className="coupon">
        <div className="i8">{cp1.name} </div>
        <div className="i5"><a href="#">Chi tiết &gt; </a></div>
        <div className="i2">{cp1.detail} </div>
        <div className="i7">{cp1.dk}</div>
        <button className="i10">{cp1.use}</button>
      </div>

      </div>
      <div className="sub-footer">
        <div>Có thể áp dụng đồng thời nhiều mã </div>
      </div>
    </div>
    <div className="total">
        <div>Thành tiền  </div>
        <div className="i5" >{item0.price * count0 + item1.price * count1}.000</div>
        <div className="i12">Tổng số tiền (gồm VAT)  </div>
        <div className="i5 i12">{item0.price * count0 + item1.price * count1}.000 </div>
        <button  className="i3 i10">THANH TOÁN</button>
      </div>
    </div>
    </div>
);
}

export default Cart
