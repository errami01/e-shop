import "./ClosedOrderItem.css"
export default function ClosedOrderItem({item}){
    return(
        <div className="container--closed-order-item">
            <h4 className="item-title--closed-order-item">{item.title}</h4>
            <div className="img-container--closed-order-item">
                <img className={`img--closed-order-item`} src={item.image} alt='cart item'/>
            </div>
            <div className="quantity-table--closed-order-item">
                <span className="quantity-label--closed-order-item">Quantity</span>
                <span className="quantity-value--closed-order-item">{item.orderedQuantity}</span>
            </div>
            <div className="price-table--closed-order-item">
                <span className="price-label--closed-order-item">Price</span>
                <span className="price-value--closed-order-item">{Number.isInteger(item.price)? item.price+'.00':item.price}$</span>
            </div>
        </div >
    )
}