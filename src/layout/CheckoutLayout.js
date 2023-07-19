import './CheckoutLayout.css'
import { Outlet } from "react-router-dom"
import Cart from "../components/Cart"
import {requireAuth} from  '../utils/requireAuth'
import {fetchSingleUser} from  '../utils/fetcher'

export async function loader(){
    requireAuth('/checkout')
    return null     
}
export default function CheckoutLayout(){
    return(
        <div className="container--checkoutLayout">
            <div className='infos-section--checkoutLayout'>
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