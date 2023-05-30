
import './InputComponent.css'
export default function InputComponent(props){
    return (
    <div className='input-container'>
        {props.icon}
        <input name={props.name}  className='input--inputComponent' type={props.type} placeholder=' '/>
        <label className='label--inputComponent'>{props.label}</label>
        <div className='bottom-line--inputComponent'></div>
    </div>)
}