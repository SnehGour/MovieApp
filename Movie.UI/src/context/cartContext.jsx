import { useState, createContext, useContext } from 'react';

// Cart Context created
export const CartContext = createContext(null);

// Creating provider
export const CartProvider = (props) => {

    const [cart, setCart] = useState([])
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {props.children}
        </CartContext.Provider>
    )
}