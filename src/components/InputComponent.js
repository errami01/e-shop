
import { forwardRef } from 'react'
import './InputComponent.css'
export const InputComponent = forwardRef(({label,icon, ...rest}, ref)=>{
    return (
    <div className='input-container'>
        {icon}
        <input 
            {...rest}
            ref={ref}
            className='input--inputComponent' 
            placeholder=' '
        />
        <label className='label--inputComponent'>{label}</label>
        <div className='bottom-line--inputComponent'></div>
    </div>)
    })
