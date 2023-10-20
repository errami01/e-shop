import CartItem from "../components/CartItem"
import './Cart.css'
import { Link, useSubmit } from "react-router-dom"
import Button from "./Button"
import { myHistory } from "../utils/myHistory"
import { countCartItems } from "../utils/utils"
import { useRef, useState } from "react"
export default function Cart(props){
    const [updateCartState, setUpdateCartState] = useState(false)
    const {isPage, withoutDeliveryDate, cart} = props
    const cartItems = cart
    const itemsToRemove = useRef([])
    itemsToRemove.current = itemsToRemove.current.filter(
        (itemId)=> cartItems.findIndex(item=>item.id === itemId)!== -1
        )
    const submit = useSubmit()
    const cartItemsNumber= countCartItems(cartItems)
    const totalAmount = cartItems.reduce((acc, curr)=>  acc+(curr.price*curr.orderedQuantity),0)
    const addItemToRemove =(itemId)=> itemsToRemove.current.push(itemId)
    const cartItemsElements = cartItems.map((item)=>{
        return <CartItem  
                    key={item.id} 
                    cart={cart}
                    item={item} 
                    toRemove = {itemsToRemove.current.indexOf(item.id) >= 0}
                    addItemToRemove={addItemToRemove}
                    handleTrashClick={removeCartItem} 
                    setUpdateCartState={setUpdateCartState}
                    isPage={isPage} 
                    withoutDeliveryDate={withoutDeliveryDate}/>
    })
    const currentLocation = myHistory.location.pathname.slice(1)
    const linkTarget = currentLocation === 'cart'? 'checkout': 'cart'
    const buttonText = currentLocation === 'cart'? 'checkout': 'Go to cart'
    async function removeCartItem(itemId){
        const newCart = cartItems.filter(cartItem=> cartItem.id !== itemId)
        const formData = new FormData()
        formData.append('newCart', JSON.stringify(newCart))
        submit(formData, {
            method: 'post',
            action: `/?redirect=${myHistory.location.pathname}`,
        })
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