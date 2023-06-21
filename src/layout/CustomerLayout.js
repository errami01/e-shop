import { Outlet, useOutletContext, useLoaderData } from "react-router-dom"
import "./CustomerLayout.css"
import { fetchSingleUser } from "../utils/fetcher"
import { useEffect } from "react"
import { requireAuth } from "../utils/requireAuth"

export async function loader(){
    requireAuth()
    return await fetchSingleUser(1)     
}
export default function CustomerLayout(){
    const {userData, setUserData} = useOutletContext()
    const userLoadedData = useLoaderData()
    useEffect(()=> setUserData(userLoadedData),[userLoadedData])
    return(
        <div className="customer-layout-container">
            {userData && <Outlet context={{userData}}/>}
        </div>
    )
}