
import './EmptyOrders.css'
export default function EmptyOrders(props){
    return(
            <div className="container--EmptyOrders">
            </div>   
                <i className="fa-solid fa-cart-flatbed-suitcase"></i> 
                <h5>{props.notification}</h5>
    )
}