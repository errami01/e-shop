import { Form, Link, useOutletContext } from "react-router-dom";
import CheckoutFlow from "../../components/CheckoutFlow";
import './Payment.css'
import { CheckoutInput } from "../../components/CheckoutInput";
import { useState } from "react";

export async function action(){
    return null
}
export default function Payment(){
    const [isFormReady, setIsFormReady] = useState({})
    const { cancelOrder } = useOutletContext()
    return(
        <CheckoutFlow>
            <h5 className="pageTitle--checkoutFlow">Paymet Details</h5>
            <Form>
                <CheckoutInput 
                    label = "Name on card"
                    setIsFormReady = {setIsFormReady}
                    pattern={/^((?:[A-Za-z]+ ?){1,3})$/}
                    message = "Please enter a valid name"
                />
                <CheckoutInput                     
                    label = "Card number"
                    setIsFormReady = {setIsFormReady}
                    pattern={/[0-9\s]{13,19}/}
                    inputMode="numeric"
                    autoComplete="cc-number"
                    type="tel"
                    placeholder="xxxx xxxx xxxx xxxx"
                    message = "Please enter a valid card number"
                />
                <div className="expiration-cvc--payment">
                    <label >
                        Expiration
                        <div className="card-expiration--payment">
                            <CheckoutInput 
                                name = "month"
                                type = "number"
                                placeholder="mm"
                                pattern={/^(0?[1-9]|1[012])$/}
                                message={""}
                                setIsFormReady = {setIsFormReady}
                            />
                            <span className="slash--payment">/</span>
                            <CheckoutInput 
                                name = "year"
                                type = "number"
                                placeholder="yy"
                                pattern={/2[3-8]/}
                                message={""}
                                setIsFormReady = {setIsFormReady}
                            />
                        </div>
                    </label> 
                        <CheckoutInput 
                            name = "cardNumber"
                            className="cvc--payment"
                            setIsFormReady = {setIsFormReady}
                            label={'CVV'}
                            pattern={/^[0-9]{3,4}$/}
                            message={'Invalid number'}
                        />
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