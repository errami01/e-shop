import './CheckoutLayout.css'
import { Outlet } from "react-router-dom"
import Cart from "../components/Cart"
export default function CheckoutLayout(){
    return(
        <div className="container--checkoutLayout">
            <div className='checkout-section--checkoutLayout'>
                <ul className='phases--checkoutLayout'>
                    <li>Account</li>
                    <li>-- <i className="fa-solid fa-circle-check"></i> --</li>
                    <li>Shipping</li>
                    <li>-- <i className="fa-solid fa-circle-check"></i> --</li>
                    <li>Payment</li>
                </ul>
                <Outlet />
            </div>     
            <Cart />
        </div>
    )
}