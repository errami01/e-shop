import { Form, Link, useLoaderData, useNavigation, useOutletContext } from "react-router-dom"
import CheckoutFlow from "../../components/CheckoutFlow"
import { myHistory } from "../../utils/myHistory"
import { setFormDataToObject, setLocalOnGoingCheckout, setLocalUserData, storeObject } from "../../utils/utils"
import { getUserData } from "../../utils/fetcher"

export async function action({request}){
    try{
        const dataForm = await request.formData()
        const dataFormObject = setFormDataToObject(dataForm)
        await storeObject(dataFormObject, 'users' , setLocalUserData)
        await storeObject({phase: 'shipping'}, 'onGoingCheckouts' , setLocalOnGoingCheckout)
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
    const {firstname, lastname, phone, email} = userData
    return(
        <CheckoutFlow 
            btnText={'Shipping details'}
            pageTitle={'Account Details'}
        >
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
        </CheckoutFlow>
        
    )
}