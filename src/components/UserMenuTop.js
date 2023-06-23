import './UserMenuTop.css'
import { Link } from 'react-router-dom'
export default function UserMenuTop(props){
    function handleUserMenuTopClick(e){
        e.stopPropagation()
    }
    return(
        <ul className={`container--userMenuTop ${props.isOpen? 'openedMenu':'closedMenu'}`} onClick={handleUserMenuTopClick}>
            <Link>Your account</Link>
            <Link>Your orders</Link>
            <Link>Mailbox</Link>
            <Link>Your wishlist</Link>
            <Link>Logout</Link>
        </ul>
    )
}