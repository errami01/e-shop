import './UserMenuTop.css'
import { Link } from 'react-router-dom'
export default function UserMenuTop(props){
    const {isBig=false, isOpen=true} = props
    function handleUserMenuTopClick(e){
        e.stopPropagation()
    }
    return(
        <ul 
            className={
                `${isBig? 'big-container--userMenuTop':'container--userMenuTop'} 
                ${isOpen? 'openedMenu':'closedMenu'}`} 
            onClick={handleUserMenuTopClick}
            >
            <Link to={'/customer'}>Your account</Link>
            <Link to={'/customer/orders'}>Your orders</Link>
            <Link to={'/customer/mailbox'}>Mailbox</Link>
            <Link to={'/customer/wishlist'}>Your Wishlist</Link>
            <Link >Logout</Link>
        </ul>
    )
}
