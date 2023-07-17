import { Form } from "react-router-dom";
import CheckoutFlow from "../../components/CheckoutFlow";

export default function Payment(){
    return(
        <CheckoutFlow>
            <h5>Paymet Details</h5>
            <Form>
                <label>
                    Name on card
                    <input type="text"/>
                </label>
                <label>
                    Card number
                    <input type="tel"/>
                </label>
            </Form>
        </CheckoutFlow>
        
    )
}