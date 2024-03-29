import './CheckoutLayout.css'
import { Outlet, redirect, useLoaderData, useOutletContext } from "react-router-dom"
import Cart from "../components/Cart"
import {requireAuth} from  '../utils/requireAuth'
import CheckoutPhase from '../components/CheckoutPhase'
import { getLocalCart, setLocalOnGoingCheckout, storeObject } from '../utils/utils'
import { getOnGoingCheckout } from '../utils/fetcher'

export async function loader({request}){
    const cart = getLocalCart()
    if(!cart.length) throw redirect('/cart')
    requireAuth(request)
    return await getOnGoingCheckout()     
}
export default function CheckoutLayout(){
    const {cart} = useOutletContext()
    const onGoingCheckout = useLoaderData()
    const phases = ['personalInfos', 'shipping', 'payment']
    const currentPhaseIndex = phases.indexOf(onGoingCheckout.phase)
    const style = {
        borderBottom: '4px solid'
    }
    const cancelOrder =async ()=>{
        try{
            await storeObject({phase: 'personalInfos'}, 'onGoingCheckouts', setLocalOnGoingCheckout)
        }
        catch(e){

        }
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
                <Outlet context={{ onGoingCheckout, cancelOrder }}/>
            </div>     
            <Cart cart={cart}/>
        </div>
    )
}