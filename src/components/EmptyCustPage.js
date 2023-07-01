
import './EmptyCustPage.css'
import { Link } from 'react-router-dom'
export default function EmptyCustPage(props){
    return(
            <div className="container--EmptyCustPage">
                {props.icon}
                <h5>{props.notification}</h5>
                <p>{props.explanation}</p>
                {props.btnText && <Link to='/'>
                  <button>{props.btnText}</button>
                </Link>}
            </div>  
    )
}