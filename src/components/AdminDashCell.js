import './AdminDashCell.css'
export default function AdminDashCell({children,className, title}){
    return(
        <div className={`container--adminDashCell ${className}`} >
            {title && <h1 className='cell-title--adminDashCell'>{title}</h1>}
            {children}
        </div>
    )
}