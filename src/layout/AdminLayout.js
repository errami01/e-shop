import './AdminLayout.css'
export default function AdminLayout(){
    return(
        <div className="container--adminLayout">
            <header>
                <div className='logo--adminLayout'>
                    <i className="fa-solid fa-user-check"></i>
                    <span>Admin</span>
                </div>
            </header>
        </div>
    )
}