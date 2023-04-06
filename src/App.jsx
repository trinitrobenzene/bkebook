import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from '../components';
import ProductList from '../pages/Home';
import BookDetail from '../pages/Productdetail/product-detail';

function App() {
    return (
        <>
            <Header />
            <div className="App mw">
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/BookDetail" element={<BookDetail />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
