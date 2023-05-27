import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useState, useEffect, useRef } from "react"

export default function Layout(){
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart'))||[])
    const cartItemsNumber = useRef()
    cartItemsNumber.current= countCartItems(cartItems)
    function countCartItems(cart){
       return cart.reduce((acc, curr)=> acc + curr.orderedQuantity,0)
    }
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cartItems))
    },[cartItems])
    // console.log(cartItems[0])
    return(
        <>
            <Header cartItemsNumber={cartItemsNumber.current}/>
            <Outlet context={{cart: [cartItems, setCartItems], cartItemsNumber: cartItemsNumber.current}}/>
        </>
       
    )
}