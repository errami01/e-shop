import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useState, useEffect } from "react"

export default function Layout(){
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart'))||[])
    
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cartItems))
    },[cartItems])
    // console.log(cartItems[0])
    return(
        <>
            <Header cartLength={cartItems.length}/>
            <Outlet context={{cart: [cartItems, setCartItems]}}/>
        </>
       
    )
}