import './AdminHeader.css'
export default function AdminHeader(){
    return(
        <header className="container-adminHeader">
            <div className='bars-icon-container--adminHeader'>
                <i className="fa-solid fa-bars" ></i>
            </div>
            <div className='logo--adminLayout'>
                <span>Admin</span>
            </div>
            <div role="search" className='search-container--adminHeader'>
                <input aria-label="search term" placeholder='Search...'/>
                <button aria-label="search">
                <i className="fas fa-search"></i>
                </button>
            </div>
        </header>
    )
}