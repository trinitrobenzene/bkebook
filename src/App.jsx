import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from '../components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../pages/Home';

function App() {
    return (
        <>
            <Header />
            <div className="App mw">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
