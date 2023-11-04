import './CheckoutFlow.css'
import { Form, Link, useNavigation, useOutletContext } from "react-router-dom"
import { useRef } from "react"
import Button from "./Button"
export default function CheckoutFlow({children, btnText, pageTitle}){
    const { cancelOrder } = useOutletContext()
    const isClicked = useRef(false)
    const navigation = useNavigation()
    isClicked.current = isClicked.current && navigation.state !== 'idle'
    return(
        <div className="container--checkoutFlow">
            <h5 className="pageTitle--checkoutFlow">{pageTitle}</h5>
            <Form method="post" >
                {children}
                <div className="bottom-btns--checkoutFlow">
                        { isClicked.current? 
                            <Button disabled/>
                        :
                            <button onClick={()=> isClicked.current=true} className="continue-btn--checkoutFlow btn--app">{btnText}</button>
                        }
                        <Link 
                            to='/cart' 
                            className="cancel-btn--checkoutFlow " 
                            onClick={cancelOrder}>
                        Cancel order
                        </Link>
                    </div>
            </Form>
        </div>
    )
}