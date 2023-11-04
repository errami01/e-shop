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
                
            </div>
        </div>
    )
} 