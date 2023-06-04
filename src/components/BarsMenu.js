import './BarsMenu.css'
import { useRef } from 'react'

export function loader(){
    
}
export default function BarsMenu({isOpen}){
    const container = useRef()
    function handleLocalStorage(){
        localStorage.clear()
    }
    return(
        <div 
        className={`barsMenu-container ${isOpen? 'openedMenu':'closedMenu'}`}
        ref={container}>
            <ul>
                <li>Sign In</li>
                <li>Sign Up</li>
                <li onClick={handleLocalStorage}>Clear local storage</li>
            </ul>
        </div>
    )
}