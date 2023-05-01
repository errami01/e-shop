import './BarsMenu.css'
import { useRef } from 'react'
export default function BarsMenu({isOpen}){
    const container = useRef()
    console.log(container.current)
    return(
        <div 
        className={`barsMenu-container ${isOpen? 'openedMenu':'closedMenu'}`}
        ref={container}>
            <ul>
                <li>Sign In</li>
                <li>Sign Up</li>
            </ul>
        </div>
    )
}