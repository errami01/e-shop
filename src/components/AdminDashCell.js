import './AdminDashCell.css'
export default function AdminDashCell({children,className}){
    return(
        <div className={`container--adminDashCell ${className}`} >
            {children}
        </div>
    )
}