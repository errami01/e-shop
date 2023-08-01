import './AdminBody.css'
export default function AdminBody({children}){
    return(
        <div className="container--adminBody">
            <h1 className='page-title--adminBody'>Page Title</h1>
            {children}
        </div>
    )
}