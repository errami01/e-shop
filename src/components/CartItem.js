import './CartItem.css'
import QuantityControler from './QuantityControler'
//This component is rendered in Cart.js
export default function CartItem(item){
    return (
        <div className="cartItem-container">
                <img className="img-cartItem" src={item.image}/>
                <h5 className='item-title-cartItem'>{item.title}</h5>
                <p className='delevery-date-cartItem'>Delivery between Wednesday, May 17, 2023 and Friday, May 19, 2023</p> 
                <span className='price-carItem'>{Number.isInteger(item.price)? item.price+'.00':item.price}$</span>
                <QuantityControler className='quantity-cartItem' quantity={item.orderedQuantity}/>
                <span className='trash-cartItem'><i className="fa-solid fa-trash-can"></i></span>

        </div>
    )
}