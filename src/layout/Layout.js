import { Outlet, useLoaderData } from "react-router-dom"
import Header from "../components/Header"
import { fetchData } from "../utils/fetcher"
import { useUserState } from "../utils/useUserState"
import CartContextProvider from "../contexts/CartContext"

export async function loader(){
    return await fetchData('categories')
}
export default function Layout(){
    const [userData, setUserData] = useUserState(()=>JSON.parse(localStorage.getItem('user')))
    const categories = useLoaderData()
    return(
        <CartContextProvider>
            <Header 
                categories={categories}
                userData={userData}
                setUserData={setUserData}
                />
            <Outlet 
                context={
                    {
                        userData: userData,
                        setUserData: setUserData
                    }
                    }
                    />
        </CartContextProvider>
       
    )
}