import { useState, useEffect, useRef, createContext } from "react";

export const CartContext = createContext();
export default function CartContextProvider({children}){
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart'))||[])
    const cartItemsNumber = useRef()
    cartItemsNumber.current= countCartItems(cartItems)
    function countCartItems(cart){
       return cart.reduce((acc, curr)=> acc + curr.orderedQuantity,0)
    }
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cartItems))
    },[cartItems])
    return(
        <CartContext.Provider value={{cartItems, setCartItems,cartItemsNumber:cartItemsNumber.current}}>
            {children}
        </CartContext.Provider>
    )
}