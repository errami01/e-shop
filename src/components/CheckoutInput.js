import { useRef } from 'react'
import './CheckoutInput.css'
export const CheckoutInput = ({label, icon, setIsFormReady, pattern, message, className,  ...rest})=>{
    const containerRef = useRef()
    const inputRef = useRef()
    function checkNegativeValidity(pattern, elementToCheck, elementToUpdate, message){
        if(!elementToCheck.current.value.match(pattern)){
            elementToUpdate.current.style.setProperty('--theme-color', 'red')
            elementToUpdate.current.setAttribute('invalidMessage', message)
            return 
        }
    }
    function checkPositiveValidity(pattern, elementToCheck, elementToUpdate){
        console.log('positiveValidity')
        if(elementToCheck.current.value.match(pattern)){
            elementToUpdate.current.style.setProperty('--theme-color', 'var(--first-Color)')
            elementToUpdate.current.setAttribute('invalidMessage', '')
            setIsFormReady((prev)=> {
                return {
                    ...prev,
                    elementToCheck: true,
                }
            })
            return 
        }
        setIsFormReady((prev)=> {
            return {
                ...prev,
                elementToCheck: false,
            }
        })
    }
    return (
    <div ref={containerRef} className='input-container--checkout-input invalid--checkout-input'>
        {icon}
        <label>{label}</label>
        <input 
            {...rest}
            ref={inputRef}
            className={`${className}`}
            onBlur={()=> checkNegativeValidity(
                pattern,
                inputRef,
                containerRef,
                message
            )}
            onChange={()=> checkPositiveValidity(
                pattern,
                inputRef,
                containerRef,
            )}
        />
    </div>)
    }