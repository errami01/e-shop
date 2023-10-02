import CartItem from "../components/CartItem"
import './Cart.css'
import {nanoid} from 'nanoid'
import { Link } from "react-router-dom"
import Button from "./Button"
import { myHistory } from "../utils/myHistory"
import { countCartItems, getLocalCart, setLocalCart, storeObject } from "../utils/utils"
export default function Cart(props){
    const {isPage, withoutDeliveryDate} = props
    const cartItems = getLocalCart()
    const cartItemsNumber= countCartItems(cartItems)
    const totalAmount = cartItems.reduce((acc, curr)=>  acc+(curr.price*curr.orderedQuantity),0)
    const cartItemsElements = cartItems.map((item)=>{
        return <CartItem  
                    key={nanoid()} 
                    item={item} 
                    handleTrashClick={removeCartItem} 
                    isPage={isPage} 
                    withoutDeliveryDate={withoutDeliveryDate}/>
    })
    const currentLocation = myHistory.location.pathname.slice(1)
    const linkTarget = currentLocation === 'cart'? 'checkout': 'cart'
    const buttonText = currentLocation === 'cart'? 'checkout': 'Go to cart'
    async function removeCartItem(itemId){
        const newCartItems = cartItems.filter(item=> item.id !== itemId)
        try{
            await storeObject(newCartItems, 'carts', setLocalCart)
            myHistory.navigate('#',{replace: true})
        }
        catch(e){

        }
    }
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