import './Header.css'
import BarsMenu from './BarsMenu'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import UserMenuTop from './UserMenuTop'
export default function Header(props){
    const [isMenuOpen, setIsMenuOpen] = useState({
        loggedInIcon: false,
        barsIconContainer:false

    })
    function handleBarsClick(){
        // setIsMenuOpen(prev=> !prev)
    }
    function handleBarsAndUserMenuMouseLeave(event){
        const targetId = event.currentTarget.id
        setIsMenuOpen((prev)=> {
            const newObj = {...prev}
            newObj[targetId] = false
            console.log(newObj)
            return newObj
        })
    }
    function handleBarsMenuMouseEnter(){
        // setIsMenuOpen(true)
    }
    function handleBarsMenuMouseLeave(){

    }
    function showBarsAndUserMenu(event){
        const targetId = event.currentTarget.id
        setIsMenuOpen((prev)=> {
            const newObj = {...prev}
            newObj[targetId] = !newObj[targetId]
            console.log(newObj)
            return newObj
        })
    }
    return(
        <header className="header-container">
            <div 
                className='icon-container--header bars-icon-container--header' 
                onClick={handleBarsClick}
                onMouseLeave={handleBarsMenuMouseLeave}
                >     
                <i className="fa-solid fa-bars" ></i>
                <BarsMenu 
                isOpen={isMenuOpen.barsIconContainer} 
                setIsOpen={setIsMenuOpen}
                onMouseLeave={handleBarsMenuMouseLeave}
                onMouseEnter={handleBarsMenuMouseEnter}
                categories={props.categories}/>
            </div>
            <Link to={''} className='logo'>E-commerce</Link>
            {props.userData?
                <div 
                    id='loggedInIcon' 
                    className='user-icon-header icon-container--header' 
                    onClick ={showBarsAndUserMenu}
                    onMouseLeave={handleBarsAndUserMenuMouseLeave}
                    >
                        <i className="fa-solid fa-user-check"></i>
                        <span className='icon-label--header'>Hello {props.userData.name.firstname}</span>
                        <UserMenuTop
                            isOpen = {isMenuOpen.loggedInIcon}
                        />
                </div>               
                :
                <Link to='login' className='user-icon-header icon-container--header'>
                    <i className="fa-regular fa-user" ></i>
                    <span className='icon-label--header'>Sign in</span>
                </Link>
            }
            
            <Link className='cartIconLink-header icon-container--header' to='cart'>
                 <i className="fa-solid fa-cart-shopping">
                    {props.cartItemsNumber>0 && <span className='items-counter-header'>{props.cartItemsNumber}</span>}
                 </i>
                 
                <span className='icon-label--header'>My cart</span>
            </Link>       
        </header>
    )
}