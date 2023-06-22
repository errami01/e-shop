import './BarsMenu.css'
import { useRef } from 'react'
import {nanoid} from 'nanoid'
import { Link } from 'react-router-dom'

export default function BarsMenu({isOpen,categories}){
    const container = useRef()
    const categoryItems = categories.map(category=>{
        const upperCaseFirstLetter = category.charAt(0).toUpperCase() + category.slice(1)
        return (
            <Link key={nanoid()} to={'category/'+category}>
                <li >{upperCaseFirstLetter}</li>
            </Link>)
    })
    function handleLocalStorage(){
        localStorage.clear()
    }
    return(
        <div 
        className={`barsMenu-container ${isOpen? 'openedMenu':'closedMenu'}`}
        ref={container}
        >
            <ul>
                {categoryItems}
                <li onClick={handleLocalStorage}>Clear local storage</li>
            </ul>
        </div>
    )
}