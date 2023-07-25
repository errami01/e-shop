import CheckoutFlow from "../../components/CheckoutFlow";
import { useContext } from "react";
import { Form, Link, useOutletContext } from "react-router-dom";
import { UserDataContext } from "../../contexts/UserDataContext";
import { myHistory } from "../../utils/myHistory";
import { setOngoingOrder } from "../../utils/useOngoingOrder";

export function action(){
    const [ongoingOrder, updateOngoingOrder] = setOngoingOrder()
    updateOngoingOrder(
        {
            ...ongoingOrder,
            phase: 'payment'
        }
    )
    return myHistory.navigate(`checkout/payment`)
}
export default function Shipping(){
    const {userData} = useContext(UserDataContext)
    const {cancelOrder} = useOutletContext()
    const {number, street, city,zipcode} = userData.address
    return(
        <CheckoutFlow>
            <h5 className="pageTitle--checkoutFlow">Shipping details</h5>
            <Form method="post">
                <label>
                    Address
                    <input type='text' defaultValue={number} required/>
                </label>
                <label>
                    Street
                    <input type='text' defaultValue={street} required/>
                </label>
                <label>
                    City
                    <input defaultValue={city} type='text' required/>
                </label>
                <label>
                    Postcode
                    <input defaultValue={zipcode} type='text' required/>
                </label>
                <div className="bottom-btns--checkoutFlow">
                    <Link 
                        to='/cart' 
                        className="cancel-btn--checkoutFlow " 
                        onClick={cancelOrder}>
                    Cancel order
                    </Link>
                    <button className="continue-btn--checkoutFlow btn--app">Payment</button>
                </div>
            </Form>
        </CheckoutFlow>
    )
}