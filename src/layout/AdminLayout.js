import AdminHeader from '../components/AdminHeader'
import AdminBody from '../components/AdminBody'
import './AdminLayout.css'

export default function AdminLayout(){
    return(
        <div className="container--adminLayout">
            <AdminHeader />
            <AdminBody />
        </div>
    )
}