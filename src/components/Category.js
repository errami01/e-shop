import { useState } from "react"
import { Link } from "react-router-dom";
import './Category.css'


export default function Categorie({category,products}){
    function setNumberOfProduct(){
        const windowWidth= parseInt(document.documentElement.clientWidth)
        if(windowWidth > 900 ) return 5;
        if(windowWidth > 700 ) return 4;
        if(windowWidth > 500 ) return 3;
        if(windowWidth > 450 ) return 2;
        return 1
    }
    const[productsToRender, setProductsToRender] = useState(setNumberOfProduct())
    window.addEventListener('resize',()=> {
        setProductsToRender(setNumberOfProduct())
    })
    console.log(productsToRender,)
    const imagesToRender = [... products]
    imagesToRender.length = productsToRender
    const images = imagesToRender.map(
        product=><Link to={`${product.category}/${product.id}`}><img 
                    key={product.id}
                    className="image"
                    src={product.image} 
                    /></Link>
    )
    return(<>
        <div className="categorie-container">
            <header className="category-name">{category}</header>
            <div className="image-container">
                {images}
            </div>
        </div>

        </>
    )
}