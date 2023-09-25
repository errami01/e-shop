import { Outlet, useLocation, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import CartContextProvider from "../contexts/CartContext"
import UserDataContextProvider from "../contexts/UserDataContext"
import { myHistory } from "../utils/myHistory"
import { getUserData } from "../utils/fetcher"

export async function loader(){
}
export default function Layout(){
    myHistory.navigate = useNavigate()
    myHistory.location = useLocation()
    return(
        <UserDataContextProvider>
            <CartContextProvider>
                <Header />
                <Outlet />
            </CartContextProvider>
        </UserDataContextProvider>
       
    )
}