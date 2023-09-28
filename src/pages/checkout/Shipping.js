import CheckoutFlow from "../../components/CheckoutFlow";
import { Form, Link, useLoaderData, useOutletContext } from "react-router-dom";
import { myHistory } from "../../utils/myHistory";
import { setOngoingOrder } from "../../utils/useOngoingOrder";
import { setLocalUserAddresse, setFormDataToObject, storeObject } from "../../utils/utils";
import { getUserData } from "../../utils/fetcher";
import { auth } from "../../config/firbase";

export async function loader(){
    return await getUserData()
}
export async function action({request}){
    const [ongoingOrder, updateOngoingOrder] = setOngoingOrder()
    updateOngoingOrder(
        {
            ...ongoingOrder,
            phase: 'payment'
        }
    )
    try{
        const dataForm = await request.formData()
        const dataFormObject = setFormDataToObject(dataForm)
        await storeObject(dataFormObject, 'usersAddresses' , setLocalUserAddresse)
        return myHistory.navigate(`checkout/payment`)
    }
    catch(error){
        return error.message
    }
}
export default function Shipping(){
    const userData = useLoaderData()
    const {cancelOrder} = useOutletContext()
    const {address} = userData
    return(
        <CheckoutFlow>
            <h5 className="pageTitle--checkoutFlow">Shipping details</h5>
            <Form method="post">
                <label>
                    Address
                    <input name='address' type='text' defaultValue={address?.address} required/>
                </label>
                <label>
                    Street
                    <input name='street' type='text' defaultValue={address?.street} required/>
                </label>
                <label>
                    City
                    <input name='city' defaultValue={address?.city} type='text' required/>
                </label>
                <label>
                    Postcode
                    <input name='postcode' defaultValue={address?.zipcode} type='text' required/>
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