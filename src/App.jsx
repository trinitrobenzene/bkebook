import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from '../components';
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
