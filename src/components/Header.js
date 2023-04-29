import './Header.css'
import BarsMenu from './BarsMenu'
export default function Header(){
    return(
        <header className="header-container">
            <div className='logo'>E-commerce</div>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-bars"></i>
            <BarsMenu />
        </header>
    )
}