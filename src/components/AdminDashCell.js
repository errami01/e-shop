import './AdminDashCell.css'
export default function AdminDashCell({children,className, title}){
    return(
        <div className={`container--adminDashCell ${className}`} >
            {title && <h1 style={{margin:0}}>{title}</h1>}
            {children}
        </div>
    )
}