import './QuantityControler.css'
import { myHistory } from '../utils/myHistory'
import { useSubmit } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Button from './Button'
//This component is rendered in CartItem.js and productDetails
export  default function QuantityControler(props){
    const cartItems= props.cart
    const submit = useSubmit()
    const isProcessing = useRef(false)
    const targetItem = cartItems.filter(item=> item.id === props.itemId)[0]
    const [qteInput, setQteInput] = useState(targetItem.orderedQuantity)
    isProcessing.current = isProcessing.current && targetItem.orderedQuantity !==qteInput
    let timeOutId = useRef()
    const targetItemIndex = cartItems.indexOf(targetItem)
    useEffect(()=>{
        if(qteInput !== targetItem.orderedQuantity){
            setQteInput(targetItem.orderedQuantity)
        }
    },[targetItem.orderedQuantity])

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
                isProcessing.current = true;
                const newCart = [...cartItems]
                newCart[targetItemIndex] = {...targetItem, orderedQuantity: newValue}
                const formData = new FormData()
                formData.append('newCart', JSON.stringify(newCart))
                submit(formData, {
                    method: 'post',
                    action: `/?redirect=${myHistory.location.pathname}`,
                })
            },1000)
        }
    }

    return(
        <div className={`quantityControler-container ${props.className}`}>
                {isProcessing.current?
                    <Button className='processing-btn--quantity-controler'></Button>
                :
                    <>
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
                        <span
                            className="plus-quantityControler"
                            onClick={()=> updateQte(timeOutId, 'plus')}
                        >
                            +
                        </span>
                    </>
                }
        </div>
    )
}