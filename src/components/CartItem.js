import './CartItem.css'
import QuantityControler from './QuantityControler'
import { Link } from 'react-router-dom'
//This component is rendered in Cart.js
export default function CartItem(props){
    const {item} = props
    const [cartItems, setCartItems] = props.cart
    function handleTrashClick(){
        setCartItems(prev=>{
            return prev.filter(product=> product.id !== item.id)
        })
    }
    return (
        <div className="cartItem-container">
                <Link to={`/${item.category}/${item.id}`} className='image-link-cartItem'>
                    <img className="img-cartItem" src={item.image}/>
                </Link>
                <h5 className='item-title-cartItem'>{item.title}</h5>
                <p className='delevery-date-cartItem'>Delivery between Wednesday, May 17, 2023 and Friday, May 19, 2023</p> 
                <span className='price-carItem'>{Number.isInteger(item.price)? item.price+'.00':item.price}$</span>
                <QuantityControler itemId={item.id} className='quantity-cartItem' quantity={item.orderedQuantity}/>
                <span className='trash-cartItem' onClick={handleTrashClick}>
                    <i className="fa-solid fa-trash-can"></i>
                </span>

        </div>
    )
}