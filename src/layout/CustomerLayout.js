import { Outlet } from "react-router-dom"
export default function CustomerLayout(){
    return(
        <div className="customer-layout-container">
            <h1>This is Customer Layout</h1>
            <Outlet />
        </div>
    )
}