import './Header.css'
import BarsMenu from './BarsMenu'
import { useState } from 'react'
export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    function handleBarsClick(){
        setIsMenuOpen(prev=> !prev)
        
    }
    // console.log(isMenuOpen)
    return(
        <header className="header-container">
            <div className='logo'>E-commerce</div>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-bars" onClick={handleBarsClick}></i>
            <BarsMenu isOpen={isMenuOpen}/>
        </header>
    )
}