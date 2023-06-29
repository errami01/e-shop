
import './EmptyOrders.css'
export default function EmptyOrders(props){
    return(
            <div className="container--EmptyOrders">
                <i className="fa-solid fa-cart-flatbed-suitcase"></i>
                <h5>{props.notification}</h5>
                <p>{props.explanation}</p>
            </div>  
    )
}