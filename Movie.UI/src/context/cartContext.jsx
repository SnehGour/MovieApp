import { useState,createContext } from 'react';

// Cart Context created
export const CartContext = createContext(null);

// Creating provider
export const CartProvider = (props) => {
    const state={
        movies:{
            movie:{
                id:'3',
                name:'The NoteBook',
                price:'50',
            }
        }
    }
    const [cart,setCart] = useState(state)
    return (
        <CartContext.Provider value={{cart,setCart}}>
            {props.children}
        </CartContext.Provider>
    )
}