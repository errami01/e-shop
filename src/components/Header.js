import './Header.css'
import BarsMenu from './BarsMenu'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Header(props){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    function handleBarsClick(){
        setIsMenuOpen(prev=> !prev)
        
    }
    // console.log(isMenuOpen)
    return(
        <header className="header-container">
            <div className='logo'>E-commerce</div>
            <Link className='cartIconLink-header' to='cart'>
                 <i className="fa-solid fa-cart-shopping"></i>
                 <span className='items-counter-header'>{props.cartItemsNumber}</span>
            </Link>
                 <i className="fa-solid fa-bars" onClick={handleBarsClick}></i>
            <BarsMenu isOpen={isMenuOpen}/>
        </header>
    )
}