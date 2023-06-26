import { NavLink, Outlet } from "react-router-dom";
import './CustOrders.css'

export default function CustOrders(){
    return(
        <div className="custOrders-container customer-page-container">
            <h1 className="title--customerLayout">Your orders</h1>
            <ul className="nav-bar--custOrders">
                <NavLink 
                    to='.'
                    style={({isActive})=>{
                        return {
                            color: isActive? 'var(--first-Color)':null,
                            borderBottom: isActive? '1px solid var(--first-Color)':''
                        }
                    }}
                    end
                    >OPEN ORDERS</NavLink>
                <NavLink 
                    to='closed'
                    style={({isActive})=>{
                        return {
                            color: isActive? 'var(--first-Color)':null,
                            borderBottom: isActive? '1px solid var(--first-Color)':''
                        }
                    }}
                >CLOSED ORDERS</NavLink>
            </ul>
            <Outlet />
        </div>
    )
}