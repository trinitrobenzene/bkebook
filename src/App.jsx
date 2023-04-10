import { Route, Routes } from 'react-router-dom';
import {  Footer, Header} from '../components';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../pages/Home';
import User from '../pages/layout/User';
import ProfilePage from '../pages/User/ProfilePage';
import PurchaseOrderPage from '../pages/User/PurchaseOrderPage';
import SellOrderPage from '../pages/User/SellOrderPage';
import SellOldBook from '../pages/SellOldBook';

function App() {
    return (
        <>
            <Header />
            <div className="App mw">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<User/>}>
                        <Route path="profile" element={<ProfilePage/>}/>
                        <Route path="purchaseOrder" element={<PurchaseOrderPage/>}/>
                        <Route path="sellOrder" element={<SellOrderPage/>}/>
                    </Route>
                    <Route path="/sell" element={<SellOldBook/>} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
