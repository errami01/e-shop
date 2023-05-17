import './CartItem.css'
import QuantityControler from './QuantityControler'

export default function CartItem(item){
    return (
        <div className="cartItem-container">
            {/* <section className="img-container-cartItem"> */}
                <img className="img-cartItem" src={item.image}/>
            {/* </section> */}
            {/* <section className='title-delevery-cartItem'> */}
                <h5 className='item-title-cartItem'>{item.title}</h5>
                <p className='delevery-date-cartItem'>Delivery between Wednesday, May 17, 2023 and Friday, May 19, 2023</p>
               
            {/* </section> */}
            {/* <section className='price-quantity-delete-cartItem'> */}
                <span className='price-carItem'>{Number.isInteger(item.price)? item.price+'.00':item.price}$</span>
                {/* <span className='quantity-cartItem'>Quantity controler</span> */}
                <QuantityControler />
                <span className='trash-cartItem'><i className="fa-solid fa-trash-can"></i></span>
            {/* </section> */}

        </div>
    )
}