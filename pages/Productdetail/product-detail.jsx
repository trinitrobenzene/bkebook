import React, {useState} from 'react';
import { Row, Col, Button, Rate, Carousel } from 'antd';
import { Rating } from '../../components';

import './productdetail.css'
function BookDetail(props) {
    const book =
        {
          id: 1,
          name: 'Vật Lý Đại Cương A1',
          image: 'https://www.lib.hcmut.edu.vn/uploads/noidung/bai-tap-vat-ly-dai-cuong-a1-0-517.jpg',
          author: 'Trần Văn Lượng',
          nsx: 'Đại học Quốc gia TPHCM',
          year: '2022',
          language: 'Tiếng Việt',
          numberpage: '360',
          price: '120.000',
          description: 'Dễ thấy Sword Art Online có không gian kể chuyện rất rộng, lại tỉ mỉ đi theo từng tầng, tạo cảm giác tận hưởng rõ rệt cho người chơi và cả người đọc.Câu chuyện hiện đã đến tầng 7, vẫn là tầng từng trải nghiệm trong giai đoạn chạy thử của SAO, nói cách khác, cho đến đây, Kirito vẫn biết nhiều hiểu rộng hơn Asuna. Thành ra theo thói quen, vừa tới nơi Asuna đã lập tức hỏi cậu xem chỗ ăn chỗ chơi nào ngon. So với các lần trước, lần này Kirito tỏ ra ngần ngừ rõ rệt. Không phải cậu không muốn cho cô biết, mà là tầng này đã để lại cho cậu dư vị cay đắng đến nỗi tiềm thức luôn muốn chối bỏ hết thông tin. Cho đến lúc sắp ra bãi săn bên ngoài, nhìn thấy có tận hai cổng để đi, Kirito mới khôi phục kí ức. Một cổng ốp phù điêu hình người sang trọng nâng ly rượu, mở ra con đường thênh thang phơi phới. Một cổng là người ăn mặc lam lũ gò mình đi dưới gió táp mưa sa, hứa hẹn hành trình gập ghềnh. Sau khi nghe giải thích, Asuna chọn đường gió táp mưa sa…Tập 7 chứa đựng đôi chút suy luận điều tra dựa trên một manh mối vô lý, gợi nhớ không khí tập làm thám tử của Kirito khi gặp án mạng trong khu vực an toàn ở Sword Art Online 008 “Early and Late”.'

        };
  
        var count = 0;
        const [quantity, setQuantity] = useState(count);
      
        const handleIncrease = () => {
          setQuantity(quantity + 1);
        };
      
        const handleDecrease = () => {
          if (quantity > 0) {
            setQuantity(quantity - 1);
          }
        };     
        

  return (
    <div className="book-detail">
      <Row>
        <Col span={8}>
          <img style={{ objectFit: 'cover', width: '80%', height: '450px', marginTop: '10px',  marginLeft: '25px',marginBottom: '10px', }} src={book.image} alt={book.name} />  
          <Carousel autoplay dots infinite speed={10} slidesToShow={3} slidesToScroll={1} >
            <div style={{  width: '50%', height: '150px',  }}>
              <img style={{ objectFit: 'cover', width: '75%', height: '150px',  }} src={book.image} alt="image1" />
            </div>
            <div style={{  width: '50%', height: '150px',  }}>
              <img style={{ objectFit: 'cover', width: '75%', height: '150px', }} src={book.image} alt="image2" />
            </div>
            <div style={{  width: '50%', height: '150px',  }}>
              <img style={{ objectFit: 'cover', width: '75%', height: '150px', }} src={book.image} alt="image3" />
            </div>
            <div style={{  width: '50%', height: '150px',  }}>
              <img style={{ objectFit: 'cover', width: '75%', height: '150px', }} src={book.image} alt="image3" />
            </div>
            <div style={{  width: '50%', height: '150px',  }}>
              <img style={{ objectFit: 'cover', width: '75%', height: '150px', }} src={book.image} alt="image3" />
            </div>
          </Carousel>      
        </Col>
        <Col span={16} style={{  marginTop: '40px' }}>
          <h1>{book.name}</h1>
          <p className='text' style={{ display: 'flex',  fontSize: 18 }}>Nhà xuất bản: <p style={{ color: '#2F70AF', marginLeft: '5px'  }}> {book.nsx}</p></p>
          <p className='text' style={{ display: 'flex', fontSize: 18 }}>Tác giả: <p style={{ color: '#2F70AF', marginLeft: '5px'  }}> {book.author}</p></p>
          <Rate disabled defaultValue={2} />
          <p style={{ display: 'flex', marginTop: '10px', fontSize: 26, color: '#02315E', fontWeight: 'bold', }}>{book.price} Đ</p>
          <div style={{ display: 'flex', marginTop: '10px'}}>
            <Button style={{ backgroundColor: '#2F70AF'  }} onClick={handleDecrease}>-</Button>
            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5px', marginRight: '5px' }}>{quantity}</p>
            <Button style={{ backgroundColor: '#2F70AF'  }} onClick={handleIncrease}>+</Button>
          </div>
          <div style={{ display: 'flex', marginTop: '10px'}}>
            <Button style={{ backgroundColor: '#2F70AF', width: '150px'  }}>Mua ngay</Button>
            <Button style={{ marginLeft: '5px'  }}>Thêm vào giỏ hàng</Button>
          </div>
          
        </Col>
      </Row>
      
      <div className='header-detail'>
          <p className='text-title'>THÔNG TIN CHI TIẾT</p>
        </div>
        <p >Mã sách: {book.id}</p>
        <p className='text'>Nhà xuất bản: <p style={{ color: '#2F70AF', marginLeft: '5px'  }}> {book.nsx}</p></p>
        <p className='text'>Tác giả: <p style={{ color: '#2F70AF', marginLeft: '5px'  }}> {book.author}</p></p>
        <p className='text'>Năm xuất bản: <p style={{ color: '#2F70AF', marginLeft: '5px'  }}> {book.year}</p></p>
        <p className='text'>Ngôn ngữ: <p style={{ color: '#2F70AF', marginLeft: '5px'  }}> {book.language}</p></p>
        <p className='text'>Số trang: <p style={{ color: '#2F70AF', marginLeft: '5px'  }}> {book.numberpage}</p></p>
        <p className='text'> {book.description}</p>
      <Rating/>
    </div>
  );
}

export default BookDetail;