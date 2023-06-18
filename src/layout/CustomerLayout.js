import { Outlet, useOutletContext, useLoaderData } from "react-router-dom"
import "./CustomerLayout.css"
import { fetchSingleUser } from "../utils/fetcher"
import { useEffect } from "react"
import { requireAuth } from "../utils/requireAuth"

export async function loader(){
    requireAuth()
    return await fetchSingleUser(1)
    // return null
     
}
export default function CustomerLayout(){
    const {userData, setUserData} = useOutletContext()
    const userLoadedData = useLoaderData()
    useEffect(()=> setUserData(userLoadedData),[userLoadedData])
    console.log(userData)
    return(
        <div className="customer-layout-container">
            <Outlet context={{userData}}/>
        </div>
    )
}