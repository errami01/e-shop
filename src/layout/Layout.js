import { Outlet, useLoaderData, useLocation, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import CartContextProvider from "../contexts/CartContext"
import UserDataContextProvider from "../contexts/UserDataContext"
import { myHistory } from "../utils/myHistory"
import { getUserData } from "../utils/fetcher"
import { auth } from "../config/firbase"

export async function loader(){
    return await getUserData(auth.currentUser.uid)
}
export default function Layout(){
    myHistory.navigate = useNavigate()
    myHistory.location = useLocation()
    const userData = useLoaderData()
    return(
        <UserDataContextProvider>
            <CartContextProvider>
                <Header />
                <Outlet />
            </CartContextProvider>
        </UserDataContextProvider>
       
    )
}