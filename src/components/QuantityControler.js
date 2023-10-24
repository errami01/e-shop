import './QuantityControler.css'
import { myHistory } from '../utils/myHistory'
import { useSubmit } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
//This component is rendered in CartItem.js and productDetails
export  default function QuantityControler(props){
    const cartItems= props.cart
    const submit = useSubmit()
    const targetItem = cartItems.filter(item=> item.id === props.itemId)[0]
    const [qteInput, setQteInput] = useState(targetItem.orderedQuantity)
    let timeOutId = useRef()
    const targetItemIndex = cartItems.indexOf(targetItem)
    
    useEffect(()=>{
        if(qteInput !== targetItem.orderedQuantity)
        setQteInput(targetItem.orderedQuantity)
    })

    function updateQte(timeOutId, sign, event){
        let oldValue = qteInput
        let newValue = oldValue
        if(sign === 'minus' && qteInput > 1){
            newValue = oldValue - 1
            setQteInput(newValue)
        }
        else if(sign === 'plus' && qteInput <10){
            newValue = oldValue + 1
            setQteInput(newValue)
        }
        else if(!sign){
            const value = parseInt(event.target.value)
            if(isNaN(value) || value < 1){
                newValue = 1
                setQteInput(newValue)
            }
            else if(value > 20) {
                newValue = 20
                setQteInput(newValue)
            }
            else {
                newValue = value
                setQteInput(newValue)
            }
        }
        if(oldValue !== newValue){
            clearTimeout(timeOutId.current)
            timeOutId.current = setTimeout(()=>{
                cartItems[targetItemIndex] = {...targetItem, orderedQuantity: newValue}
                const formData = new FormData()
                formData.append('newCart', JSON.stringify(cartItems))
                submit(formData, {
                    method: 'post',
                    action: `/?redirect=${myHistory.location.pathname}`,
                })
            },2000)
        }
    }

    return(
        <div className={`quantityControler-container ${props.className}`}>
            <span className="plus-quantityControler" onClick={handleQuantity}>+</span>
                <span
                    className="minus-quantityControler"
                    onClick={()=>{updateQte(timeOutId, 'minus')}}
                >-</span>
                <input
                    type='number'
                    className='number-input--quantityControler'
                    min="1"
                    max="5"
                    onChange={(e)=> updateQte(timeOutId, null, e)}
                    value={qteInput}
                />
        </div>
    )
}