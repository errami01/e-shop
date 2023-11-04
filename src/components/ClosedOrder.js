import ClosedOrderItem from "./ClosedOrderItem";
import './ClosedOrder.css'
export default function ClosedOrder({orders}){
    const closedOrderItems = orders.cart.map((order, index)=>{
        return <ClosedOrderItem key= {index} item = {order}/>
    })
    return(
        <div className="container--closed-order">
            <h4 className="header--closed-order">
                {orders.time}
            </h4>
            {closedOrderItems}
            <div className="totals--closed-order">
                <span className="total-items-label--closed-order">Total Items</span>
                <span className="total-items--closed-order">{orders.totalItems}</span>
                <span className="total-amount-label--closed-order">Total</span>
                <span className="total-amount--closed-order">{Number.isInteger(orders.totalAmount)? orders.totalAmount+'.00':orders.totalAmount}$</span>
            </div>
        </div>
    )
} 