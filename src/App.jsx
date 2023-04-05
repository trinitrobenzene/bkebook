import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from '../components';
import Home from '../pages/Home';
import SellOldBook from '../pages/SellOldBook';

function App() {
    return (
        <>
            <Header />
            <div className="App mw">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sell" element={<SellOldBook/>} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
