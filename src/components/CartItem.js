import './CartItem.css'
import QuantityControler from './QuantityControler'
import { Link, useNavigation } from 'react-router-dom'
import { useEffect } from 'react'
import Spinner from './Spinner'
//This component is rendered in Cart.js
export default function CartItem(props){
    const navigation = useNavigation()
    const {
        item,
        isPage,
        withoutDeliveryDate,
        handleTrashClick,
        cart,
        toRemove,
        addItemToRemove,
        setUpdateCartState} = props
    const pageClassName = isPage? '-page':''
    useEffect( ()=>{
        if(toRemove && navigation.state==='idle'){
            handleTrashClick(item.id)
        }
    })
   
    return (
        <div className={`cartItem-container${pageClassName}`}>
                <Link to={`/${item.category}/${item.id}`} className={`image-link-cartItem${pageClassName}`}>
                    <img className={`img-cartItem${pageClassName}`} src={item.image} alt='cart item'/>
                </Link>
                <h5 className={`item-title-cartItem${pageClassName}`}>{item.title}</h5>
                {!withoutDeliveryDate && <p className={`delevery-date-cartItem${pageClassName}`}>
                    Delivery between Wednesday, May 17, 2023 and Friday, May 19, 2023
                </p>} 
                <span className={`price-carItem${pageClassName}`}>{Number.isInteger(item.price)? item.price+'.00':item.price}$</span>
                <QuantityControler cart={cart} itemId={item.id} className={`quantity-cartItem${pageClassName}`} quantity={item.orderedQuantity}/>
                {toRemove ?
                    <Spinner className= {`trash-cartItem${pageClassName}`}/>
                    :
                    <span
                        className={`trash-cartItem${pageClassName}`}
                        onClick={
                            ()=>{
                                addItemToRemove(item.id)
                                setUpdateCartState(prev=> !prev)
                            }
                        }
                    >
                        <i className="fa-solid fa-trash-can"></i>
                    </span>
                    }

        </div>
    )
}