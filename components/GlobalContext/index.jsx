import { createContext, useContext, useState } from 'react';

export const GlobalContext = createContext();
export const useGlobalCtx = () => useContext(GlobalContext);

const GContext = ({ children }) => {
    const [globalUser, setGlobalUser] = useState(null);
    const [globalCart, setGlobalCart] = useState([]);
    const value = {
        globalUser,
        setUser: setGlobalUser,
        globalCart,
        setCart: setGlobalCart,
    };
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GContext;
