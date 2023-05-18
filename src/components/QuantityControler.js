import './QuantityControler.css'
import { useOutletContext } from 'react-router-dom'
//This component is rendered in CartItem.js
export  default function QuantityControler(props){
    
    return(
        <div className={`quantityControler-container ${props.className}`}>
            <span className="minus-quantityControler">-</span>
            <span className="result-quantityControler">{props.quantity}</span>
            <span className="plus-quantityControler">+</span>
        </div>
    )
}