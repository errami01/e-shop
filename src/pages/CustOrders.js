import { NavLink } from "react-router-dom";
import './CustOrders.css'

export default function CustOrders(){
    return(
        <div className="custOrders-container customer-page-container">
            <h1 className="title--customerLayout">Your orders</h1>
            <ul className="nav-bar--custOrders">
                <NavLink 
                    to='.'
                    style={(isActive)=>{
                        return {
                            color: isActive? 'var(--first-Color)':'grey',
                            borderBottom: isActive? '1px solid var(--first-Color)':''
                        }
                    }}
                    >OPEN ORDERS</NavLink>
                <NavLink 
                    to='closed'
                    style={({isActive})=>{
                        return {
                            color: isActive? 'var(--first-Color)':'',
                            borderBottom: isActive? '1px solid var(--first-Color)':''
                        }
                    }}
                >CLOSED ORDERS</NavLink>
            </ul>
        </div>
    )
}