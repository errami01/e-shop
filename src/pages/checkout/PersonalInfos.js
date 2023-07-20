import { Form, redirect } from "react-router-dom"
import CheckoutFlow from "../../components/CheckoutFlow"
import { useContext } from "react"
import { UserDataContext } from "../../contexts/UserDataContext"
export function action(){
    return redirect('shipping')
    
}
export default function PersonalInfos(){
    const {userData} = useContext(UserDataContext)
    const {name, phone, email} = userData
    return(
        <CheckoutFlow>
            <h5 className="pageTitle--checkoutFlow">Account Details</h5>
            <Form method="post">
                <label>
                    First Name
                    <input type='text' defaultValue={name.firstname} required/>
                </label>
                <label>
                    Last Name
                    <input type='text' defaultValue={name.lastname} required/>
                </label>
                <label>
                    Phone
                    <input defaultValue={phone} type='tel' required/>
                </label>
                <label>
                    Email
                    <input defaultValue={email} type='email' required/>
                </label>
                <div className="bottom-btns--checkoutFlow">
                    <button className="cancel-btn--checkoutFlow ">Cancel order</button>
                    <button className="continue-btn--checkoutFlow btn--app">Shipping details</button>
                </div>
            </Form>
            
        </CheckoutFlow>
        
    )
}