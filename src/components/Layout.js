import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useState } from "react"

export default function Layout(){
    const [cartItems, setCartItems] = useState([])
    return(
        <>
            <Header cartLength={cartItems.length}/>
            <Outlet context={{cartItems: [cartItems, setCartItems]}}/>
        </>
       
    )
}