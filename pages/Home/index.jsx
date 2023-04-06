import { Card, Carousel, Row, Col } from 'antd';
import './product.css';
const productList = [
  {
    id: 1,
    name: 'Vật lý đại cương 1',
    image: 'https://www.lib.hcmut.edu.vn/uploads/noidung/bai-tap-vat-ly-dai-cuong-a1-0-517.jpg',
    price: 20000,
  },
  {
    id: 2,
    name: 'Vật lý đại cương 1',
    image: 'https://www.lib.hcmut.edu.vn/uploads/noidung/bai-tap-vat-ly-dai-cuong-a1-0-517.jpg',
    price: 20000,
  },
  {
    id: 3,
    name: 'Vật lý đại cương 1',
    image: 'https://www.lib.hcmut.edu.vn/uploads/noidung/bai-tap-vat-ly-dai-cuong-a1-0-517.jpg',
    price: 20000,
  },
  {
    id: 4,
    name: 'Vật lý đại cương 1',
    image: 'https://www.lib.hcmut.edu.vn/uploads/noidung/bai-tap-vat-ly-dai-cuong-a1-0-517.jpg',
    price: 20000,
  },
  {
    id: 5,
    name: 'Vật lý đại cương 1',
    image: 'https://www.lib.hcmut.edu.vn/uploads/noidung/bai-tap-vat-ly-dai-cuong-a1-0-517.jpg',
    price: 20000,
  },
  {
    id: 6,
    name: 'Vật lý đại cương 1',
    image: 'https://www.lib.hcmut.edu.vn/uploads/noidung/bai-tap-vat-ly-dai-cuong-a1-0-517.jpg',
    price: 20000,
  },
  {
    id: 7,
    name: 'Vật lý đại cương 1',
    image: 'https://www.lib.hcmut.edu.vn/uploads/noidung/bai-tap-vat-ly-dai-cuong-a1-0-517.jpg',
    price: 20000,
  },
  {
    id: 8,
    name: 'Vật lý đại cương 1',
    image: 'https://www.lib.hcmut.edu.vn/uploads/noidung/bai-tap-vat-ly-dai-cuong-a1-0-517.jpg',
    price: 20000,
  }
];


const ProductList = () => {
  return (
    <div>
      <div style={{ marginTop: '25px' }}>
        <Row>
          <Col span={16} style={{ marginRight: '30px', marginLeft: '10px' }}>
            <Carousel style={{ width: '100%', height: '410px',  borderRadius: '10px' }} autoplay>
              <div>
                <img src="https://picsum.photos/800/300/?random=1" style={{ objectFit: 'cover', width: '100%', height: '410px',borderRadius: '10px' }} alt="image1" />
              </div>
              <div>
                <img src="https://picsum.photos/800/300/?random=2" style={{ objectFit: 'cover', width: '100%', height: '410px',borderRadius: '10px' }} alt="image2" />
              </div>
              <div>
                <img src="https://picsum.photos/800/300/?random=3" style={{ objectFit: 'cover', width: '100%', height: '410px', borderRadius: '10px' }} alt="image3" />
              </div>
            </Carousel>
          </Col>
          <Col span={7}>
            <Row><img style={{ width: '400px', height: '200px', borderRadius: '10px' }} src="https://picsum.photos/800/600" alt="image4" /></Row>
            <Row><img style={{ width: '400px', height: '200px', marginTop: '10px', borderRadius: '10px' }} src="https://picsum.photos/800/600" alt="image4" /></Row>
          </Col>
        </Row>
        </div>
        <div className='header'>
          <p className='text'>DANH MỤC SẢN PHẨM</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {productList.map((product) => (
            <Card key={product.id} style={{ width: 300, margin: '10px' }}>
            <img alt={product.name} src={product.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
                <h3 style={{ margin: 0 }}>{product.name}</h3>
                <div>{product.price} Đ</div>
            </div>
            </Card>
        ))}
        </div>
    </div>
  );
};

export default ProductList;
