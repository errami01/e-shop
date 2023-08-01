import AdminHeader from '../components/AdminHeader'
import AdminBody from '../components/AdminBody'
import './AdminLayout.css'
import { Outlet } from 'react-router-dom'

export default function AdminLayout(){
    return(
        <div className="container--adminLayout">
            <AdminHeader />
            <AdminBody >
                <Outlet />
            </AdminBody>
        </div>
    )
}