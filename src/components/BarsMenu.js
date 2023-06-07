import './BarsMenu.css'
import { useRef } from 'react'
import {nanoid} from 'nanoid'

export default function BarsMenu({isOpen, onMouseLeave, onMouseEnter, categories}){
    const container = useRef()
    const categoryItems = categories.map(category=>{
        const upperCaseFirstLetter = category.charAt(0).toUpperCase() + category.slice(1)
        return <li key={nanoid()}>{upperCaseFirstLetter}</li>
    })
    function handleLocalStorage(){
        localStorage.clear()
    }
    return(
        <div 
        className={`barsMenu-container ${isOpen? 'openedMenu':'closedMenu'}`}
        ref={container}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        >
            <ul>
                {categoryItems}
                <li onClick={handleLocalStorage}>Clear local storage</li>
            </ul>
        </div>
    )
}