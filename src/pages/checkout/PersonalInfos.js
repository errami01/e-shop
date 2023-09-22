import { Form, Link, useOutletContext } from "react-router-dom"
import CheckoutFlow from "../../components/CheckoutFlow"
import { useContext } from "react"
import { UserDataContext } from "../../contexts/UserDataContext"
import { myHistory } from "../../utils/myHistory"
import { setOngoingOrder } from "../../utils/useOngoingOrder"
export function action(){
    const [ongoingOrder, updateOngoingOrder] = setOngoingOrder()
    updateOngoingOrder(
        {
            ...ongoingOrder,
            phase: 'shipping'
        }
    )
    return myHistory.navigate(`checkout/shipping`)
}
export default function PersonalInfos(){
    const {userData} = useContext(UserDataContext)
    const { cancelOrder } = useOutletContext()
    const {name, phone, email} = userData
    return(
        <CheckoutFlow>
            <h5 className="pageTitle--checkoutFlow">Account Details</h5>
            <Form method="post" >
                <label>
                    First Name
                    <input name='firstname' type='text' defaultValue={name?.firstname} required/>
                </label>
                <label>
                    Last Name
                    <input name='lastname' type='text' defaultValue={name?.lastname} required/>
                </label>
                <label>
                    Phone
                    <input name='phone'defaultValue={phone} type='tel' required/>
                </label>
                <label>
                    Email
                    <input name='email' defaultValue={email} type='email' required/>
                </label>
                <div className="bottom-btns--checkoutFlow">
                    <Link 
                        to='/cart' 
                        className="cancel-btn--checkoutFlow " 
                        onClick={cancelOrder}>
                    Cancel order
                    </Link>
                    <button className="continue-btn--checkoutFlow btn--app">Shipping details</button>
                </div>
            </Form>
            
        </CheckoutFlow>
        
    )
}