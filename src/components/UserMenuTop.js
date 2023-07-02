import './UserMenuTop.css'
import { Link, NavLink } from 'react-router-dom'
export default function UserMenuTop(props){
    const activeBackgroundColor = '#ffdba8'
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
            <NavLink 
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
                to={'/customer/wishlist'}
                style={({isActive})=>{
                    if(isBig){
                        return{
                            backgroundColor: isActive? activeBackgroundColor:''
                        }
                    }
                }}
                >
                <i class="fa-regular fa-heart"></i>
                Your Wishlist</NavLink>
            <Link onClick={()=>props.setUserData()} >
                <i className="fa-solid fa-right-from-bracket"></i>
                Logout</Link>
        </ul>
    )
}
