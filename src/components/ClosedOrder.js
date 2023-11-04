import ClosedOrderItem from "./ClosedOrderItem";
import './ClosedOrder.css'
export default function ClosedOrder({items}){
    const closedOrderItems = items.map((item, index)=>{
        return <ClosedOrderItem key= {index} item = {item}/>
    })
    return(
        <div className="container--closed-order">
            <h4 className="header--closed-order">
                Closed Order header
            </h4>
            {closedOrderItems}
            <div className="totals--closed-order">
                <span className="total-items-label--closed-order">Total Items</span>
                <span className="total-items--closed-order">100</span>
                <span className="total-amount-label--closed-order">Total</span>
                <span className="total-amount--closed-order">100</span>
            </div>
        </div>
    )
} 