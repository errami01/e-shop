import './QuantityControler.css'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { getLocalCart, setLocalCart, storeObject } from '../utils/utils'
import { myHistory } from '../utils/myHistory'
//This component is rendered in CartItem.js and productDetails
export  default function QuantityControler(props){
    const cartItems= getLocalCart()
    const targetItem = cartItems.filter(item=> item.id === props.itemId)[0]
    const targetItemIndex = cartItems.indexOf(targetItem)
    async function handleQuantity(event){
        const eventTargetValue = event.target.innerHTML
        if(eventTargetValue === '-' && targetItem.orderedQuantity > 1){
            const newCartItems = [...cartItems]
            newCartItems[targetItemIndex] = {...targetItem, orderedQuantity: targetItem.orderedQuantity - 1}
            try{
                await storeObject(newCartItems, 'carts', setLocalCart)
                myHistory.navigate('#', {replace: true})
            }
            catch(e){

            }
            return null 
        }
        if(eventTargetValue === '+'){ 
            const newCartItems = [...cartItems]
            newCartItems[targetItemIndex] = {...targetItem, orderedQuantity: targetItem.orderedQuantity + 1}
            try{
                await storeObject(newCartItems, 'carts', setLocalCart)
                myHistory.navigate('#', {replace: true})
            }
            catch(e){

            }
            
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