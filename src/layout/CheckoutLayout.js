import './CheckoutLayout.css'
import { Outlet } from "react-router-dom"
import Cart from "../components/Cart"
export default function CheckoutLayout(){
    return(
        <div className="container--checkoutLayout">
            <Outlet />
            <Cart />
        </div>
    )
}