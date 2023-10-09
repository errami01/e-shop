import { Form, Link, useLoaderData, useOutletContext } from "react-router-dom"
import CheckoutFlow from "../../components/CheckoutFlow"
import { myHistory } from "../../utils/myHistory"
import { setOngoingOrder } from "../../utils/useOngoingOrder"
import { setFormDataToObject, setLocalUserData, storeObject } from "../../utils/utils"
import { getUserData } from "../../utils/fetcher"
import { auth } from "../../config/firbase"

export async function action({request}){
    const [ongoingOrder, updateOngoingOrder] = setOngoingOrder()
    updateOngoingOrder(
        {
            ...ongoingOrder,
            phase: 'shipping'
        }
    )
    try{
        const dataForm = await request.formData()
        const dataFormObject = setFormDataToObject(dataForm)
        await storeObject(dataFormObject, 'users' , setLocalUserData)
        return myHistory.navigate(`checkout/shipping`)
    }
    catch(error){
        return error.message
    }
    
}
export async function loader(){
    return await getUserData()
}
export default function PersonalInfos(){
    const userData = useLoaderData()
    const { cancelOrder } = useOutletContext()
    const {firstname, lastname, phone, email} = userData
    return(
        <CheckoutFlow>
            <h5 className="pageTitle--checkoutFlow">Account Details</h5>
            <Form method="post" >
                <label>
                    First Name
                    <input name='firstname' type='text' defaultValue={firstname} required/>
                </label>
                <label>
                    Last Name
                    <input name='lastname' type='text' defaultValue={lastname} required/>
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