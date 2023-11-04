import { Outlet, redirect, useLoaderData, useLocation, useNavigate, defer, Await, useMatches} from "react-router-dom"
import Header from "../components/Header"
import { myHistory } from "../utils/myHistory"
import { getCart, getUserData } from "../utils/fetcher"
import { removeLocalUserData, setLocalCart, storeObject } from "../utils/utils"
import { confirmUserState } from "../utils/authentication"
import { Suspense } from "react"
import Skeleton from "../components/Skeleton"
import HeaderSkeleton from "../components/HeaderSkeleton"
import Footer from "../components/Footer"

export async function loader(){
    try{
        await confirmUserState()
        await getUserData()
    }
    catch(e){
        //Remvove user data if the user session expires
        removeLocalUserData()
    }
    console.log('Layout loader')
    return defer({cartPromise: getCart()}) 
}
export async function action({request}){
    console.log('Layout action')
    const url = new URL(request.url)
    const pathToGo = url.searchParams.get('redirect')
    try{
        const formData = await request.formData()
        const newCartItems = JSON.parse(formData.get('newCart'))
        await storeObject(newCartItems, 'carts', setLocalCart)
        return redirect(pathToGo)
    }
    catch(e){
        return e.message
    }
}
export default function Layout(){
    myHistory.navigate = useNavigate()
    myHistory.location = useLocation()
    const loaderPromises = useLoaderData()
    const matches = useMatches()
    const outletSkeleton = matches[matches.length-1].handle
    console.log('layout component')
    return(
        <Suspense 
            fallback={
                <Skeleton>
                    <HeaderSkeleton />
                    {outletSkeleton}
                </Skeleton>
            }>
            <Await resolve={loaderPromises.cartPromise}>
                {
                    (cart)=>{
                        return(
                            <>
                                <Header cart={cart}/>
                                <Outlet context={{cart}}/>
                                <Footer />
                            </>
                            )
                        }
                    }
            </Await>
        </Suspense>
    )
}