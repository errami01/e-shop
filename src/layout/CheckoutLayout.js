import './CheckoutLayout.css'
import { Outlet, useLoaderData } from "react-router-dom"
import Cart from "../components/Cart"
import {requireAuth} from  '../utils/requireAuth'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { setOngoingOrder } from '../utils/useOngoingOrder'
import CheckoutPhase from '../components/CheckoutPhase'

export async function loader({request}){
    requireAuth(request)
    return null     
}
export default function CheckoutLayout(){
    const cart = useContext(CartContext)
    const [ongoingOrder, updateOngoingOrder] = setOngoingOrder({
        cart,
        phase: 'personalInfos'
    })
    const phases = ['personalInfos', 'shipping', 'payment']
    const currentPhaseIndex = phases.indexOf(ongoingOrder.phase)
    const style = {
        borderBottom: '4px solid'
    }
    // const userLoadedData = useLoaderData()
    const cancelOrder =()=>{
        updateOngoingOrder()
    }
    return(
        <div className="container--checkoutLayout">
            <div className='infos-section--checkoutLayout'>
                <ul className='phases--checkoutLayout'>
                    <CheckoutPhase
                    to={currentPhaseIndex >=0 && 'personalInfos'}
                    style={({isActive})=> {return isActive? style:{}}}
                    className={`${currentPhaseIndex > 0 && 'completed-phase--checkoutLayout'} phase-link--checkoutLayout`}>
                        Account <i className="fa-solid fa-circle-check"></i>
                    </CheckoutPhase>
                    {'->'}
                    <CheckoutPhase
                    to={currentPhaseIndex >=1? 'shipping':undefined} 
                    style={({isActive})=> {return isActive? style:{}}}
                    className={`${currentPhaseIndex > 1 && 'completed-phase--checkoutLayout'} phase-link--checkoutLayout`}
                    >
                        Shipping <i className="fa-solid fa-circle-check"></i>
                    </CheckoutPhase>
                    {'->'}
                    <CheckoutPhase
                    to={currentPhaseIndex >=2 && 'payment'}
                    style={({isActive})=> isActive? style:{}}
                    >
                        Payment <i className="fa-solid fa-circle-check"></i>
                    </CheckoutPhase>
                </ul>
                <Outlet context={{ ongoingOrder, cancelOrder }}/>
            </div>     
            <Cart />
        </div>
    )
}