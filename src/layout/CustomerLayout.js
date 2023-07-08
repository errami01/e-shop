import { Outlet, useOutletContext, useLoaderData } from "react-router-dom"
import "./CustomerLayout.css"
import { fetchSingleUser } from "../utils/fetcher"
import { useEffect } from "react"
import { requireAuth } from "../utils/requireAuth"
import UserMenuTop from "../components/UserMenuTop"
import { useContext } from "react"
import { UserDataContext } from "../contexts/UserDataContext"

export async function loader(){
    requireAuth()
    return await fetchSingleUser(1)     
}
export default function CustomerLayout(){
    const {userData, setUserData} = useContext(UserDataContext)
    const userLoadedData = useLoaderData()
    useEffect(()=> setUserData(userLoadedData),[userLoadedData])
    return(
        <div className="customer-layout-container">
            <UserMenuTop isBig={true} setUserData={setUserData}/>
            {userData && <Outlet />}
        </div>
    )
}