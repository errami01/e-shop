import { Await, Outlet, useLoaderData, useLocation, useNavigate, defer } from "react-router-dom"
import Header from "../components/Header"
import CartContextProvider from "../contexts/CartContext"
import { myHistory } from "../utils/myHistory"
import { getCart, getUserData } from "../utils/fetcher"
import { confirmUserState, removeLocalUserData } from "../utils/utils"
import { Suspense } from "react"
import Spinner from "../components/Spinner"

export async function loader(){
    try{
        await confirmUserState()
        await getUserData()
    }
    catch(e){
        //Remvove user data if the user session expires
        removeLocalUserData()
    }
    return defer({cartPromise: getCart()})
    
}
export default function Layout(){
    myHistory.navigate = useNavigate()
    myHistory.location = useLocation()
    const loaderPromise = useLoaderData()
    return(
            <CartContextProvider>
                <Suspense fallback={<Spinner />}>
                    <Await resolve={loaderPromise.cartPromise}>
                        {(cart)=>
                         (<>
                            <Header carta={cart}/>
                            <Outlet />
                        </>)
                        }
                    </Await>
                </Suspense>
                
            </CartContextProvider>
    )
}