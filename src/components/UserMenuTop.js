import './UserMenuTop.css'
export default function UserMenuTop(){
    function handleUserMenuTopClick(e){
        e.stopPropagation()
    }
    return(
        <ul className="container--userMenuTop" onClick={handleUserMenuTopClick}>
            <li>Your account</li>
            <li>Your orders</li>
            <li>Mailbox</li>
            <li>Your wishlist</li>
            <li>Logout</li>
        </ul>
    )
}