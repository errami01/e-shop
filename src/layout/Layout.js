import { Outlet, useLocation, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import CartContextProvider from "../contexts/CartContext"
import { myHistory } from "../utils/myHistory"
import { getUserData } from "../utils/fetcher"
import { confirmUserState, removeLocalUserData } from "../utils/utils"

export async function loader(){
    try{
        await confirmUserState()
        await getUserData()
    }
    catch(e){
        //Remvove user data if the user session expires
        removeLocalUserData()
    }
    return null
    
}
export default function Layout(){
    myHistory.navigate = useNavigate()
    myHistory.location = useLocation()
    return(
            <CartContextProvider>
                <Header />
                <Outlet />
            </CartContextProvider>
    )
}