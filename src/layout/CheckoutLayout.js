import './CheckoutLayout.css'
import { Outlet, useLoaderData } from "react-router-dom"
import Cart from "../components/Cart"
import {requireAuth} from  '../utils/requireAuth'
import { fetchSingleUser } from '../utils/fetcher'
import { useContext, useEffect } from 'react'
import { UserDataContext } from '../contexts/UserDataContext'

export async function loader({request}){
    requireAuth(request)
    return await fetchSingleUser(1)     
}
export default function CheckoutLayout(){
    const {userData, setUserData} = useContext(UserDataContext)
    const userLoadedData = useLoaderData()
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
                {userData && <Outlet />}
            </div>     
            <Cart />
        </div>
    )
}