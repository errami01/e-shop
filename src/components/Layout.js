import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useState } from "react"

export default function Layout(){
    const [cartItems, setCartItems] = useState([])
    console.log(cartItems[0])
    return(
        <>
            <Header cartLength={cartItems.length}/>
            <Outlet context={{cart: [cartItems, setCartItems]}}/>
        </>
       
    )
}