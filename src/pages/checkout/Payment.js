import { redirect } from "react-router-dom";
import CheckoutFlow from "../../components/CheckoutFlow";
import './Payment.css'
import { CheckoutInput } from "../../components/CheckoutInput";
import { useState } from "react";
import { countCartItems, getLocalCart, setLocalCart, setLocalOnGoingCheckout, storeObject } from "../../utils/utils";

export async function action(){
    const cart = getLocalCart()
    if(cart.length){
        const date = new Date()
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
          };
        const time = date.toLocaleDateString(undefined, options) 
        const totalItems = countCartItems(cart)
        const totalAmount = cart.reduce((acc, curr)=>  acc+(curr.price*curr.orderedQuantity),0)
        const cartObject = {
            cart,
            totalItems,
            totalAmount, 
            time
        }
        try{
            await storeObject(cartObject, 'closedOrders', null, 'POST')
            await storeObject({phase: 'personalInfos'}, 'onGoingCheckouts', setLocalOnGoingCheckout)
            await storeObject([], 'carts', setLocalCart)
            return redirect('/customer/orders/closed')
        }
        catch(e){
            return e
        }
    }
    return null
}
export default function Payment(){
    const [isFormReady, setIsFormReady] = useState({})
    return(
        <CheckoutFlow
            btnText={'Complete order'}
            pageTitle={'Paymet Details'}
        >
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
        </CheckoutFlow>
        
    )
}