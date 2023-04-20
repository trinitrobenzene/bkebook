import { Route, Routes } from 'react-router-dom';
import { Footer, Header, GlobalContext } from '../components';
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
    ProductOfUser
} from '../pages';

function App() {
    return (
        <GlobalContext>
            <Header />
            <div className="App mw">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<UserLayout />}>
                        <Route path="profile" element={<UserProfile />} />
                        <Route path="purchase" element={<UserPurchase />} />
                        <Route path="sell" element={<UserSell />} />
                        <Route path="reward" element={<UserRewards />} />
                        <Route path="mybooks" element={<SellOldBook />} />
                    </Route>
                    <Route path="/productofuser" element={<ProductOfUser />} />

                    <Route path="/sell" element={<SellOldBook />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/detail/:id" element={<BookDetail />} />
                </Routes>
            </div>
            <Footer />
        </GlobalContext>
    );
}

export default App;