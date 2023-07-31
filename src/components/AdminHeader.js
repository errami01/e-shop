export default function AdminHeader(){
    return(
        <header>
                <div className='logo--adminLayout'>
                    <i className="fa-solid fa-user-check"></i>
                    <span>Admin</span>
                </div>
                <div role="search">
                    <input aria-label="search term" placeholder='Search...'/>
                    <button aria-label="search">
                    <i className="fas fa-search"></i>
                    </button>
                </div>

            </header>
    )
}