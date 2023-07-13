import CartItem from "../components/CartItem"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import './Cart.css'
import {nanoid} from 'nanoid'
export default function Cart(props){
    const cart = useContext(CartContext)
    const {isPage, withoutDeliveryDate} = props
    const {cartItems, cartItemsNumber} = cart
    const cartItemsElements = cartItems.map((item)=>{
        return <CartItem  
                    key={nanoid()} 
                    item={item} 
                    cart={cart} 
                    isPage={isPage} 
                    withoutDeliveryDate={withoutDeliveryDate}/>
    })
    const totalAmount = cartItems.reduce((acc, curr)=>  acc+(curr.price*curr.orderedQuantity),0)
    return (
            <div className="container--cart">
                <div className="items-container--cart">
                    <h2 className="title--cart">My Cart</h2>
                    {cartItemsElements}
                </div>
                {
                    cartItemsNumber ? 
                    <div className="totals--cart">
                        <div className="total--cart items-total--cart">
                            <span className="total-label--cart">Total items </span>
                            <span className="amount--cart">{cartItemsNumber}</span>
                        </div>
                        <div className="total--cart prices-total--cart">
                            <span className="total-label--cart">TOTAL </span>
                            <span className="amount--cart">{totalAmount.toFixed(2)}$</span>
                        </div>
                        <button className="place-order--cart">Place order</button>
                    </div>
                    :
                    <h1 className="empty--cart">Your cart is empty</h1>
                }
                
            </div>
    )
} 