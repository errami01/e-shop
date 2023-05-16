import CartItem from "../components/CartItem"
import { useOutletContext } from "react-router-dom"
import './Cart.css'
export default function Cart(){
    const {cart} = useOutletContext()
    const [cartItems, setCartItems] = cart;
    const cartItemsElements = cartItems.map((item)=>{
        return <CartItem {...item} />
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