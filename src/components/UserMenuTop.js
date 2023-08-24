import './UserMenuTop.css'
import { Link, NavLink } from 'react-router-dom'
import { useSignOut } from '../utils/useSignOut'
export default function UserMenuTop(props){
    const logOut = useSignOut()
    const activeBackgroundColor = '#ffdba8'
    const {isBig=false, isOpen=true} = props
    return(
        <ul 
            className={
                `${isBig? 'big-container--userMenuTop':'container--userMenuTop'} 
                ${isOpen? 'openedMenu':'closedMenu'}
                cust-menu-ul `
            } 
            >
            <NavLink 
                className='menu-item--userMenutop'
                to={'/customer'}
                end
                style={({isActive})=>{
                    if(isBig){
                        return{
                        backgroundColor: isActive? activeBackgroundColor:''
                        }
                    }
                }}
                >
                <i className="fa-regular fa-user" ></i>
                Your account</NavLink>
            <NavLink 
                className='menu-item--userMenutop'
                to={'/customer/orders'}
                style={({isActive})=>{
                    if(isBig){
                        return{
                        backgroundColor: isActive? activeBackgroundColor:''
                        }
                    }
                }}
                >
            <i className="fa-solid fa-bag-shopping"></i>
                Your orders
                </NavLink>
            <NavLink 
                className='menu-item--userMenutop'
                to={'/customer/mailbox'}
                style={({isActive})=>{
                    if(isBig){
                        return{
                        backgroundColor: isActive? activeBackgroundColor:''
                        }
                    }    
                }}
                >
                <i className="fa-regular fa-envelope"></i>
                Mailbox</NavLink>
            <NavLink 
                className='menu-item--userMenutop'
                to={'/customer/wishlist'}
                style={({isActive})=>{
                    if(isBig){
                        return{
                            backgroundColor: isActive? activeBackgroundColor:''
                        }
                    }
                }}
                >
                <i className="fa-regular fa-heart"></i>
                Your Wishlist</NavLink>
            <Link to='#' onClick={logOut} className='logout--userMenuTop menu-item--userMenutop'>
                <i className="fa-solid fa-right-from-bracket"></i>
                Logout</Link>
        </ul>
    )
}
