import { Outlet } from "react-router-dom"
import "./CustomerLayout.css"

import { requireAuth } from "../utils/requireAuth"
import UserMenuTop from "../components/UserMenuTop"

export function loader(){
    requireAuth()
    return null   
}
export default function CustomerLayout(){
    
    return(
        <div className="customer-layout-container">
            <UserMenuTop isBig={true} />
            <Outlet />
        </div>
    )
}