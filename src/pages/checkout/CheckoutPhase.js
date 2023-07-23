import { Navigate, useOutletContext } from "react-router-dom"

export default function CheckoutPhase(){
    const {ongoingOrder} = useOutletContext()
    return(
        <Navigate to={ongoingOrder.phase} replace/>
    )
}