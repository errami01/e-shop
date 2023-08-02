export default function AdminDashCell({children, ...rest}){
    return(
        <div className="container--adminDashCell" {...rest}>
            {children}
        </div>
    )
}