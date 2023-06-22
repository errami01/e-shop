import './UserMenuTop.css'
export default function UserMenuTop(props){
    function handleUserMenuTopClick(e){
        e.stopPropagation()
    }
    return(
        <ul className={`container--userMenuTop ${props.isOpen? 'openedMenu':'closedMenu'}`} onClick={handleUserMenuTopClick}>
            <li>Your account</li>
            <li>Your orders</li>
            <li>Mailbox</li>
            <li>Your wishlist</li>
            <li>Logout</li>
        </ul>
    )
}