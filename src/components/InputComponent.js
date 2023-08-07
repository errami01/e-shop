
import './InputComponent.css'
export default function InputComponent({label,icon, ...rest}){
    return (
    <div className='input-container'>
        {icon}
        <input 
            {...rest}
            className='input--inputComponent' 
            placeholder=' '
        />
        <label className='label--inputComponent'>{label}</label>
        <div className='bottom-line--inputComponent'></div>
    </div>)
}