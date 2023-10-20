import { Outlet, redirect, useLoaderData, useLocation, useNavigate} from "react-router-dom"
import Header from "../components/Header"
import { myHistory } from "../utils/myHistory"
import { getCart, getUserData } from "../utils/fetcher"
import { removeLocalUserData, setLocalCart, storeObject } from "../utils/utils"
import { confirmUserState } from "../utils/authentication"

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
    return await getCart()
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
    return null
}
export default function Layout(){
    myHistory.navigate = useNavigate()
    myHistory.location = useLocation()
    const cart = useLoaderData()
    console.log('layout component')
    return(
        <>
            <Header cart={cart}/>
            <Outlet context={{cart}}/>
        </>
    )
}