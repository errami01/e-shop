import { Await, Outlet, defer, useLoaderData} from "react-router-dom"
import "./CustomerLayout.css"
import { getUserData } from "../utils/fetcher"
import { Suspense } from "react"
import { requireAuth } from "../utils/requireAuth"
import UserMenuTop from "../components/UserMenuTop"
import { useContext } from "react"
import { UserDataContext } from "../contexts/UserDataContext"
import Spinner from "../components/Spinner"
import { UpdateState } from "../components/UpdateState"

export function loader(){
    requireAuth()
    return defer({userDataPromise: getUserData('"drLAqnXla5dpjz1izbyxU4jOuXe2"')})      
}
export default function CustomerLayout(){
    const {userData, setUserData} = useContext(UserDataContext)
    const {userDataPromise} = useLoaderData()    
    const awaitChild = (userLoadedData)=>{
        return(
            <>
                <UpdateState setState={setUserData} data={userLoadedData}/>
                {userData && <Outlet />}
            </>
        )
    }
    return(
        <div className="customer-layout-container">
            <UserMenuTop isBig={true} setUserData={setUserData}/>
            <Suspense fallback={<Spinner />}>
                <Await resolve={userDataPromise}>
                    {awaitChild}
                </Await>
            </Suspense>
        </div>
    )
}