import "./ClosedOrderItem.css"
export default function ClosedOrderItem({item}){
    return(
        <div className="container--closed-order-item">
            <img className={`img-closed-order-item`} src={item.image} alt='cart item'/>
        </div>
    )
}