
import { forwardRef } from 'react'
import './InputComponent.css'
export const InputComponent = forwardRef(({label,icon, ...rest}, ref)=>{
    return (
    <div ref={ref?.containerRef} className='input-container invalid--inputComponent'>
        {icon}
        <input 
            {...rest}
            ref={ref?.inputRef}
            className='input--inputComponent' 
            placeholder=' '
        />
        <label className='label--inputComponent'>{label}</label>
        <div className='bottom-line--inputComponent '></div>
    </div>)
    })
