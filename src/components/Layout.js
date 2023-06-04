import { Outlet, useLoaderData } from "react-router-dom"
import Header from "./Header"
import { useState, useEffect, useRef } from "react"
import { fetchData } from "../utils/fetcher"

export async function loader(){
    return await fetchData('categories')
}

export default function Layout(){
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart'))||[])
    const cartItemsNumber = useRef()
    const categories = useLoaderData()
    cartItemsNumber.current= countCartItems(cartItems)
    function countCartItems(cart){
       return cart.reduce((acc, curr)=> acc + curr.orderedQuantity,0)
    }
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cartItems))
    },[cartItems])
    return(
        <>
            <Header cartItemsNumber={cartItemsNumber.current} categories={categories}/>
            <Outlet context={{cart: [cartItems, setCartItems], cartItemsNumber: cartItemsNumber.current}}/>
        </>
       
    )
}