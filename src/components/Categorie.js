import { useState } from "react"
export default function Categorie({name,imgUrl}){
    const[windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth)
    window.addEventListener('resize',()=> setWindowWidth(document.documentElement.clientWidth))
    return(
        <div className="categorie-container">
            <header>{windowWidth}</header>
            <img src={imgUrl} width={200}/>
           
        </div>
    )
}