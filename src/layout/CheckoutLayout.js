import './CheckoutLayout.css'
import { Outlet, useLoaderData } from "react-router-dom"
import Cart from "../components/Cart"
import {requireAuth} from  '../utils/requireAuth'
import { fetchSingleUser } from '../utils/fetcher'
import { useContext, useEffect } from 'react'
import { UserDataContext } from '../contexts/UserDataContext'
import { CartContext } from '../contexts/CartContext'
import { setOngoingOrder } from '../utils/useOngoingOrder'

export async function loader({request}){
    requireAuth(request)
    return await fetchSingleUser(1)     
}
export default function CheckoutLayout(){
    const {userData, setUserData} = useContext(UserDataContext)
    const cart = useContext(CartContext)
    const [ongoingOrder, updateOngoingOrder] = setOngoingOrder({
        cart,
        phase: 'personalInfos'
    })
    const phases = ['personalInfos', 'shipping', 'payment']
    const userLoadedData = useLoaderData()
    const cancelOrder =()=>{
        updateOngoingOrder()
    }
    useEffect(()=> setUserData(userLoadedData),[userLoadedData])
    return(
        <div className="container--checkoutLayout">
            <div className='infos-section--checkoutLayout'>
                <ul className='phases--checkoutLayout'>
                    <li>Account <i className="fa-solid fa-circle-check"></i></li>
                    {'>'}
                    <li>Shipping <i className="fa-solid fa-circle-check"></i></li>
                    {'>'}
                    <li>Payment <i className="fa-solid fa-circle-check"></i></li>
                </ul>
                {userData && <Outlet context={{ ongoingOrder, cancelOrder }}/>}
            </div>     
            <Cart />
        </div>
    )
}