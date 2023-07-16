import { Form } from "react-router-dom"
import CheckoutFlow from "../../components/CheckoutFlow"
import { useContext } from "react"
import { UserDataContext } from "../../contexts/UserDataContext"
export default function PersonalInfos(){
    const {userData} = useContext(UserDataContext)
    const {name, phone, email} = userData
    return(
        <CheckoutFlow>
            <h5>Account Details</h5>
            <Form>
                <label>
                    First Name
                    <input type='text' defaultValue={name.firstname}/>
                </label>
                <label>
                    Last Name
                    <input type='text' defaultValue={name.lastname}/>
                </label>
                <label>
                    Phone
                    <input defaultValue={phone} type='text'/>
                </label>
                <label>
                    Email
                    <input defaultValue={email} type='email'/>
                </label>
                <button className="btn--app">Next</button>
            </Form>
            
        </CheckoutFlow>
        
    )
}