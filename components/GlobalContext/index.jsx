import { createContext, useContext, useState } from 'react';

export const GlobalContext = createContext();
export const useGlobalCtx = () => useContext(GlobalContext);

const GContext = ({ children }) => {
    const [globalUser, setGlobalUser] = useState(null);
    const [globalCart, setGlobalCart] = useState([]);

    const addToCart = (id, n = 1) => {
        const newItem = { id, amount: n };
        if (globalCart.lenth === 0) {
            setGlobalCart([newItem]);
        } else {
            const match = globalCart.find((item) => item.id === id);
            match
                ? (match.amount += n)
                : setGlobalCart([newItem, ...globalCart]);
        }
    };

    const value = {
        globalUser,
        setUser: setGlobalUser,
        globalCart,
        setCart: setGlobalCart,
        addToCart
    };
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GContext;
