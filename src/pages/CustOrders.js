import { NavLink } from "react-router-dom";

export default function CustOrders(){
    return(
        <div className="custMailbox-container customer-page-container">
            <h1 className="title--customerLayout">Your orders</h1>
            <ul>
                <NavLink to='.'>Open orders</NavLink>
                <NavLink to='closed'>Closed orders</NavLink>
            </ul>
        </div>
    )
}