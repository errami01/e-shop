import './Header.css'
import BarsMenu from './BarsMenu'
import { useState, useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import UserMenuTop from './UserMenuTop'
import CartMenu from './CartMenu'
import { UserDataContext } from '../contexts/UserDataContext'
export default function Header(props){
    const {userData, setUserData} = useContext(UserDataContext)
    const cart = useContext(CartContext)
    const {cartItemsNumber} = cart
    const [isMenuOpen, setIsMenuOpen] = useState({
        loggedInIcon: false,
        barsIconContainer:false,
        cartMenu: false

    })
    function handleBarsAndUserMenuMouseLeave(event){
        setIsMenuOpen({
            loggedInIcon: false,
            barsIconContainer:false,
            cartMenu: false
        })
    }
    function showBarsAndUserMenu(event){
        const targetId = event.currentTarget.id
        setIsMenuOpen((prev)=> {
            const newObj = {...prev}
            newObj[targetId] = !newObj[targetId]
            return newObj
        })
    }
    return(
        <header className="header-container">
            <div 
                id='barsIconContainer'
                className='icon-container--header bars-icon-container--header' 
                onClick={showBarsAndUserMenu}
                onMouseLeave={handleBarsAndUserMenuMouseLeave}
                >     
                <i className="fa-solid fa-bars" ></i>
                <BarsMenu 
                 isOpen={isMenuOpen.barsIconContainer} 
                 categories={props.categories}/>
            </div>
            <Link to={''} className='logo'>E-commerce</Link>
            {userData?
                <div 
                    id='loggedInIcon' 
                    className='user-icon-header icon-container--header' 
                    onClick ={showBarsAndUserMenu}
                    onMouseLeave={handleBarsAndUserMenuMouseLeave}
                    >
                        <i className="fa-solid fa-user-check"></i>
                        <span className='icon-label--header'>Hello {userData.name.firstname}</span>
                        <UserMenuTop
                            isOpen = {isMenuOpen.loggedInIcon}
                            isBig={false}
                            setUserData={setUserData}
                        />
                </div>               
                :
                <Link to='login' className='user-icon-header icon-container--header'>
                    <i className="fa-regular fa-user" ></i>
                    <span className='icon-label--header'>Sign in</span>
                </Link>
            }
            
            <div 
                id='cartMenu'
                className='cartIconLink-header icon-container--header' 
                onClick={showBarsAndUserMenu}
                >
                 <i className="fa-solid fa-cart-shopping">
                    {cartItemsNumber>0 && <span className='items-counter-header'>{cartItemsNumber}</span>}
                 </i>
                <span className='icon-label--header'>My cart</span>
                <CartMenu isOpen={isMenuOpen.cartMenu}/>
            </div>       
        </header>
    )
}