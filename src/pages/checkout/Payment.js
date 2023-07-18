import { Form } from "react-router-dom";
import CheckoutFlow from "../../components/CheckoutFlow";
import './Payment.css'

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
                <div className="expiration-cvc--payment">
                    <label >
                        Expiration
                        <div className="card-expiration--payment">
                            <input className="date--payment" type="number" placeholder="mm" min='1' max='12'/> 
                            <span className="slash--payment">/</span>
                            <input className='date--payment' type="number" placeholder="yy"/>
                        </div>
                    </label> 
                    <label className="cvc--payment">
                        CVC
                        <input type="text"/>
                    </label>
                </div>
                <button className="btn--app">Complete order</button>
            </Form>
        </CheckoutFlow>
        
    )
}