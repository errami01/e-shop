import { Outlet, useLoaderData } from "react-router-dom"
import Header from "../components/Header"
import { fetchData } from "../utils/fetcher"
import CartContextProvider from "../contexts/CartContext"
import UserDataContextProvider from "../contexts/UserDataContext"

export async function loader(){
    return await fetchData('categories')
}
export default function Layout(){
    const categories = useLoaderData()
    return(
        <UserDataContextProvider>
            <CartContextProvider>
                <Header 
                    categories={categories}
                    />
                <Outlet />
            </CartContextProvider>
        </UserDataContextProvider>
       
    )
}