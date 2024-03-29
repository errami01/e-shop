import './BarsMenu.css'
import { useRef, Suspense } from 'react'
import {nanoid} from 'nanoid'
import { Link, Await } from 'react-router-dom'
import { getCategories } from '../utils/fetcher'
import Spinner from './Spinner'
import { myHistory } from '../utils/myHistory'

export default function BarsMenu({isOpen}){
    const container = useRef()  
    const awaitChild = (categories)=>{
        const categoryItems = categories.map(category=>{
            const upperCaseFirstLetter = category.charAt(0).toUpperCase() + category.slice(1)
            return (
                <Link key={nanoid()} to={'category/'+category}>
                    <li >{upperCaseFirstLetter}</li>
                </Link>)
        })
        return categoryItems
    }
    function handleLocalStorage(){
        localStorage.clear()
        sessionStorage.clear()
        myHistory.navigate('#')
    }
    return(
        <div 
        className={`barsMenu-container ${isOpen? 'openedMenu':'closedMenu'}`}
        ref={container}
        data-test = 'barsMenuContainer'
        >
            <ul data-test='categoriesList'>
                <Suspense fallback={<Spinner />}>
                    <Await resolve={getCategories()}>
                        {awaitChild}
                    </Await>
                </Suspense>
                <li onClick={handleLocalStorage}>Clear local storage</li>
            </ul>
        </div>
    )
}