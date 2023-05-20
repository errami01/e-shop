import CartItem from "../components/CartItem"
import { useOutletContext } from "react-router-dom"
import './Cart.css'
import {nanoid} from 'nanoid'
export default function Cart(){
    const {cart} = useOutletContext()
    const [cartItems, setCartItems] = cart;
    const cartItemsElements = cartItems.map((item)=>{
        return <CartItem  key={nanoid()} item={item} cart={cart}/>
    })
    return (
        <div className="cart-container">
            <div className="items-cart">
                <h2 className="title-cart">My Cart</h2>
                {cartItemsElements}
            </div>
           
        </div>
    )
}