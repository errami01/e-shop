import CartItem from "../components/CartItem"
import './Cart.css'
import {nanoid} from 'nanoid'
import { Link } from "react-router-dom"
import Button from "./Button"
import { myHistory } from "../utils/myHistory"
import { getLocalCart } from "../utils/utils"
export default function Cart(props){
    const {isPage, withoutDeliveryDate} = props
    const cartItems = getLocalCart()
    const cartItemsElements = cartItems.map((item)=>{
        return <CartItem  
                    key={nanoid()} 
                    item={item} 
                    isPage={isPage} 
                    withoutDeliveryDate={withoutDeliveryDate}/>
    })
    const currentLocation = myHistory.location.pathname.slice(1)
    const linkTarget = currentLocation === 'cart'? 'checkout': 'cart'
    const buttonText = currentLocation === 'cart'? 'checkout': 'Go to cart'
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
                        <Link to={`/${linkTarget}`}>
                            <Button id='go-to-cart-btn' style={{width: '100%', marginTop: '10px'}}>{buttonText}</Button>
                        </Link>
                    </div>
                    :
                    <h1 className="empty--cart">Your cart is empty</h1>
                }
                
            </div>
    )
} 