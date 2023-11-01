import { Form, Link, useOutletContext } from "react-router-dom";
import CheckoutFlow from "../../components/CheckoutFlow";
import './Payment.css'

export default function Payment(){
    const { cancelOrder } = useOutletContext()
    return(
        <CheckoutFlow>
            <h5 className="pageTitle--checkoutFlow">Paymet Details</h5>
            <Form>
                <label>
                    Name on card
                    <input type="text"/>
                </label>
                <label>
                    Card number
                    <input id="ccn" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="19" placeholder="xxxx xxxx xxxx xxxx"/>
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
                        <input type="tel"/>
                    </label>
                </div>
                <div className="bottom-btns--checkoutFlow">
                    <button className="continue-btn--checkoutFlow btn--app">Complete order</button>
                    <Link 
                        to='/cart' 
                        className="cancel-btn--checkoutFlow " 
                        onClick={cancelOrder}>
                    Cancel order
                    </Link>
                </div>
            </Form>
        </CheckoutFlow>
        
    )
}