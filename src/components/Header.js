import './Header.css'
import BarsMenu from './BarsMenu'
import { useState, useContext, useEffect } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import UserMenuTop from './UserMenuTop'
import CartMenu from './CartMenu'
import { myHistory } from '../utils/myHistory'
export default function Header({userData}){
    const cart = useContext(CartContext)
    const {cartItemsNumber} = cart
    const [isMenuOpen, setIsMenuOpen] = useState({
        loggedInIcon: false,
        barsIconContainer:false,
        cartMenu: false
    })
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key =>
            object[key] === value);
    }
    useEffect(()=>{
        const handleBarsAndUserMenuOutsideClick = (event)=> {
            const targetId = event.target.id
            const keys = Object.keys(isMenuOpen)
            const openedMenu = getKeyByValue(isMenuOpen, true)
            if( openedMenu && !keys.find((key)=> targetId == key)){
                setIsMenuOpen(
                    (prev)=>(
                        {
                            ...prev,
                            [openedMenu] : false
                        }
                    )
                )
            }
        }
        window.addEventListener('click', handleBarsAndUserMenuOutsideClick)
        return ()=> window.removeEventListener('click', handleBarsAndUserMenuOutsideClick)
    }, [isMenuOpen])
    useEffect(()=>{
        //After login, the user data is stored in localStorage. So we need to update the userData state 
        //and cause a re-render to the header and the whole app to display user info
        const localUserData = JSON.parse(localStorage.getItem('user'))
        if(!userData && localUserData) setUserData(localUserData)
    })
    function showBarsAndUserMenu(event){
        event.stopPropagation()
        const targetId = event.currentTarget.id
        const openMenu = getKeyByValue(isMenuOpen, true)
        setIsMenuOpen((prev)=> {
            const newObj = {
                ...prev,
            }
            //Close any other menu if open
            if(openMenu && openMenu != targetId) newObj[openMenu] = false
            newObj[targetId] = !newObj[targetId]
            return newObj
        })
    }
    function showAndHideCartMenu(event){
        event.stopPropagation()
        const targetId = event.currentTarget.id
        const newState = {
            loggedInIcon: false,
            barsIconContainer:false,
            cartMenu: myHistory.location.pathname.slice(1)=='cart'? false : !isMenuOpen[targetId]
        }
        setIsMenuOpen(newState)
    }
    return(
        <header className="header-container">
            <div 
                id='barsIconContainer'
                className='icon-container--header bars-icon-container--header' 
                onClick={showBarsAndUserMenu}
                >     
                <i className="fa-solid fa-bars" ></i>
                <BarsMenu isOpen={isMenuOpen.barsIconContainer} />
            </div>
            <Link to={''} className='logo'>E-commerce</Link>
            {userData?
                <div 
                    id='loggedInIcon' 
                    className='user-icon-header icon-container--header' 
                    onClick ={showBarsAndUserMenu}
                    >
                        <i className="fa-solid fa-user-check"></i>
                        <span className='icon-label--header'>Hello {userData.firstname}</span>
                        <UserMenuTop
                            isOpen = {isMenuOpen.loggedInIcon}
                            isBig={false}
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
                onClick={showAndHideCartMenu}
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