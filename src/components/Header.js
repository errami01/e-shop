import './Header.css'
import BarsMenu from './BarsMenu'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Header(props){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    function handleBarsClick(){
        setIsMenuOpen(prev=> !prev)
    }
    function handleBarsMenuMouseLeave(){
        setIsMenuOpen(false)
    }
    function handleBarsMenuMouseEnter(){
        setIsMenuOpen(true)
    }
    return(
        <header className="header-container">
            <Link to={''}>
                <div className='logo'>E-commerce</div>
            </Link>
            <Link to='login' className='user-icon-header icon-container--header'>
                <i className="fa-regular fa-user" ></i>
                <span className='icon-label--header'>Sign in</span>
            </Link>
            <Link className='cartIconLink-header icon-container--header' to='cart'>
                 <i className="fa-solid fa-cart-shopping">
                    {props.cartItemsNumber>0 && <span className='items-counter-header'>{props.cartItemsNumber}</span>}
                 </i>
                 
                <span className='icon-label--header'>My cart</span>
            </Link>
            <div 
                className='icon-container--header bars-icon-container--header' 
                onClick={handleBarsClick}
                onMouseLeave={handleBarsMenuMouseLeave}
                >     
                <i className="fa-solid fa-bars" ></i>
                <span className='icon-label--header'>Categories</span>
            </div>
            <BarsMenu 
                isOpen={isMenuOpen} 
                setIsOpen={setIsMenuOpen}
                onMouseLeave={handleBarsMenuMouseLeave}
                onMouseEnter={handleBarsMenuMouseEnter}
                categories={props.categories}/>
        </header>
    )
}