
import './EmptyCustPage.css'
import { Link } from 'react-router-dom'
export default function EmptyCustPage(props){
    return(
            <div className="container--EmptyCustPage">
                <i className="fa-solid fa-cart-flatbed-suitcase"></i>
                <h5>{props.notification}</h5>
                <p>{props.explanation}</p>
                <Link to='/'>
                  <button>{props.btnText}</button>
                </Link>
            </div>  
    )
}