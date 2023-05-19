import './QuantityControler.css'
import { useOutletContext } from 'react-router-dom'
//This component is rendered in CartItem.js and productDetails
export  default function QuantityControler(props){
    const {cart} = useOutletContext()
    const [cartItems, setCartItems] = cart
    const targetItem = cartItems.filter(item=> item.id === props.itemId)[0]
    const targetItemIndex = cartItems.indexOf(targetItem)
    function handleQuantity(event){
        const eventTargetValue = event.target.innerHTML
        if(eventTargetValue === '-' && targetItem.orderedQuantity > 1){
            return setCartItems(prev=>{
                const rslt = [...prev]
                rslt[targetItemIndex] = {...targetItem, orderedQuantity: targetItem.orderedQuantity - 1}
                return rslt
            })
        }
        if(eventTargetValue === '+'){
            
            setCartItems(prev=>{
                const rslt = [...prev]
                rslt[targetItemIndex] = {...targetItem, orderedQuantity: targetItem.orderedQuantity + 1}
                return rslt
            })
        }
    }
    return(
        <div className={`quantityControler-container ${props.className}`}>
            <span className="minus-quantityControler" onClick={handleQuantity} value='-'>-</span>
            <span className="result-quantityControler">{targetItem.orderedQuantity}</span>
            <span className="plus-quantityControler" onClick={handleQuantity}>+</span>
        </div>
    )
}