import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from '../components';
import {
    Home,
    Cart,
    BookDetail,
    SellOldBook,
    UserLayout,
    UserProfile,
    UserPurchase,
    UserRewards,
    UserSell,
} from '../pages';

function App() {
    return (
        <>
            <Header />
            <div className="App mw">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<UserLayout />}>
                        <Route path="profile" element={<UserProfile />} />
                        <Route path="purchase" element={<UserPurchase />} />
                        <Route path="sell" element={<UserSell />} />
                        <Route path="reward" element={<UserRewards />} />
                    </Route>
                    <Route path="/sell" element={<SellOldBook />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/detail/:id" element={<BookDetail />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
