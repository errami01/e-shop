import { Outlet, useLoaderData, useLocation, useNavigate} from "react-router-dom"
import Header from "../components/Header"
import { myHistory } from "../utils/myHistory"
import { getCart, getUserData } from "../utils/fetcher"
import { removeLocalUserData } from "../utils/utils"
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
    return await getCart()
}
export default function Layout(){
    myHistory.navigate = useNavigate()
    myHistory.location = useLocation()
    const cart = useLoaderData()
    return(
        <>
            <Header cart={cart}/>
            <Outlet context={{cart}}/>
        </>
    )
}