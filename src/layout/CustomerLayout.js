import { Await, Outlet} from "react-router-dom"
import "./CustomerLayout.css"
import { fetchSingleUser } from "../utils/fetcher"
import { Suspense } from "react"
import { requireAuth } from "../utils/requireAuth"
import UserMenuTop from "../components/UserMenuTop"
import { useContext } from "react"
import { UserDataContext } from "../contexts/UserDataContext"
import Spinner from "../components/Spinner"
import { UpdateState } from "../components/UpdateState"

export async function loader(){
    requireAuth()
    return null      
}
export default function CustomerLayout(){
    const {setUserData} = useContext(UserDataContext)
    const awaitChild = (userLoadedData)=>{
        return(
            <>
                <Outlet />
                <UpdateState setState={setUserData} data={userLoadedData}/>
            </>
        )
    }
    return(
        <div className="customer-layout-container">
            <UserMenuTop isBig={true} setUserData={setUserData}/>
            <Suspense fallback={<Spinner />}>
                <Await resolve={fetchSingleUser(1)}>
                    {awaitChild}
                </Await>
            </Suspense>
        </div>
    )
}