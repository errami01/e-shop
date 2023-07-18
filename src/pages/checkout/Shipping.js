import CheckoutFlow from "../../components/CheckoutFlow";
import { useContext } from "react";
import { Form, redirect } from "react-router-dom";
import { UserDataContext } from "../../contexts/UserDataContext";

export function action(){
    return redirect('../payment')
}
export default function Shipping(){
    const {userData} = useContext(UserDataContext)
    const {number, street, city,zipcode} = userData.address
    return(
        <CheckoutFlow>
            <h5>Shipping details</h5>
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
                    <button className="cancel-btn--checkoutFlow ">Cancel order</button>
                    <button className="continue-btn--checkoutFlow btn--app">Payment</button>
                </div>
            </Form>
        </CheckoutFlow>
    )
}