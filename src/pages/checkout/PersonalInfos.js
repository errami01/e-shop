import { Form } from "react-router-dom"
import CheckoutFlow from "../../components/CheckoutFlow"
export default function PersonalInfos(){
    return(
        <CheckoutFlow>
            <h5>Account Details</h5>
            <Form>
                <label>
                    First Name
                    <input />
                </label>
                <label>
                    Last Name
                    <input />
                </label>
                <label>
                    Phone
                    <input />
                </label>
                <label>
                    Email
                    <input />
                </label>
                <button>Next</button>
            </Form>
            
        </CheckoutFlow>
        
    )
}