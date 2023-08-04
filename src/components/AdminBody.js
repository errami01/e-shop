import './AdminBody.css'
import AdminSideMenu from './AdminSideMenu'
export default function AdminBody({children}){
    return(
        <div className="container--adminBody">
            <AdminSideMenu />
            <div className='content--adminBody'>
                <h1 className='page-title--adminBody'>Page Title</h1>
                {children}
            </div>
            
        </div>
    )
}