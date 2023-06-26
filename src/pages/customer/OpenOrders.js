import './OpenOrders.css'
export default function OpenOrders(){
    return(
        <div className="container--open-orders">
            <div className="empty--open-orders">
                <i className="fa-solid fa-cart-flatbed-suitcase"></i>
                <h5>You have not placed any orders!</h5>
                <p>All your orders will be saved here so you can check their status at any time.</p>
            </div>
            
        </div>
    )
}