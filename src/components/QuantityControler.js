export  default function QuantityControler(props){
    return(
        <div className={`quantityControler-container ${props.className}`}>
            <span className="minus-quantityControler">-</span>
            <span className="minus-quantityControler">5</span>
            <span className="minus-quantityControler">+</span>
        </div>
    )
}