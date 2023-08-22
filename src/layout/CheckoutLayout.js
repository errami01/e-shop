import './CheckoutLayout.css'
import { Await, Outlet, defer, useLoaderData } from "react-router-dom"
import Cart from "../components/Cart"
import {requireAuth} from  '../utils/requireAuth'
import { getUserData } from '../utils/fetcher'
import { useContext, useEffect, Suspense } from 'react'
import { UserDataContext } from '../contexts/UserDataContext'
import { CartContext } from '../contexts/CartContext'
import { setOngoingOrder } from '../utils/useOngoingOrder'
import CheckoutPhase from '../components/CheckoutPhase'
import Spinner from '../components/Spinner'
import { UpdateState } from '../components/UpdateState'

export async function loader({request}){
    console.log('loader checkoutLayout')
    requireAuth(request)
    return defer({userDataPromise: getUserData(`"drLAqnXla5dpjz1izbyxU4jOuXe2"`)})     
}
export default function CheckoutLayout(){
    const {userData, setUserData} = useContext(UserDataContext)
    const cart = useContext(CartContext)
    const {userDataPromise} = useLoaderData()
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
    const awaitChild = (userLoadedData)=>{
        return(
            <>
                <UpdateState data={userLoadedData} setState={setUserData}/>
                {userData && <Outlet context={{ ongoingOrder, cancelOrder }}/>}
            </>
           
        )
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
                <Suspense fallback={<Spinner />}>
                    <Await resolve={userDataPromise}>
                        {awaitChild}
                    </Await>
                </Suspense>
            </div>     
            <Cart />
        </div>
    )
}