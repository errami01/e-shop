import { Navigate, useOutletContext } from "react-router-dom"

export default function CheckoutPhase(){
    const {onGoingCheckout} = useOutletContext()
    return(
        <Navigate to={onGoingCheckout.phase} replace/>
    )
}