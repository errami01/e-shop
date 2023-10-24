import './QuantityControler.css'
import { setLocalCart, storeObject } from '../utils/utils'
import { myHistory } from '../utils/myHistory'
import { useRef, useState } from 'react'
import { useSubmit } from 'react-router-dom'
//This component is rendered in CartItem.js and productDetails
export  default function QuantityControler(props){
    const cartItems= props.cart
    const submit = useSubmit()
    const targetItem = cartItems.filter(item=> item.id === props.itemId)[0]
    const [qteInput, setQteInput] = useState(targetItem.orderedQuantity)
    let timeOutId = useRef()
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