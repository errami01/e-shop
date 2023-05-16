import CartItem from "../components/CartItem"
import { useOutletContext } from "react-router-dom"
export default function Cart(){
    const {cart} = useOutletContext()
    const [cartItems, setCartItems] = cart;
    const cartItemsElements = cartItems.map((item)=>{
        return <CartItem {...item} />
    })
    return (
        <div className="cart-container">
            {cartItemsElements}
        </div>
    )
}