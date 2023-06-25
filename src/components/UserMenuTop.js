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
                ${isOpen? 'openedMenu':'closedMenu'}
                cust-menu-ul `
            } 
            onClick={handleUserMenuTopClick}
            >
            <Link to={'/customer'}>
                <i className="fa-regular fa-user" ></i>
                Your account</Link>
            <Link to={'/customer/orders'}>
            <i className="fa-solid fa-bag-shopping"></i>
                Your orders
                </Link>
            <Link to={'/customer/mailbox'}>
                <i className="fa-regular fa-envelope"></i>
                Mailbox</Link>
            <Link to={'/customer/wishlist'}>
                <i class="fa-regular fa-heart"></i>
                Your Wishlist</Link>
            <Link >
                <i className="fa-solid fa-right-from-bracket"></i>
                Logout</Link>
        </ul>
    )
}
