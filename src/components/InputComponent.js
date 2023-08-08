
import { forwardRef } from 'react'
import './InputComponent.css'
export const InputComponent = forwardRef(({label,icon, ...rest}, ref)=>{
    const {containerRef, inputRef, labelRef, bottomLineRef} = ref
    return (
    <div ref={containerRef} className='input-container invalid--inputComponent'>
        {icon}
        <input 
            {...rest}
            ref={inputRef}
            className='input--inputComponent' 
            placeholder=' '
        />
        <label ref={labelRef} className='label--inputComponent'>{label}</label>
        <div ref={bottomLineRef} className='bottom-line--inputComponent '></div>
    </div>)
    })
