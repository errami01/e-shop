import { useState, Suspense } from "react"
import { useNavigate, Await } from "react-router-dom";
import ProductCard from "./ProductCard";
import './CategoryContainer.css'
import {nanoid} from 'nanoid'
import { fetchData } from "../utils/fetcher"; 



export default function CategoryContainer({category}){
    const[productsToRender, setProductsToRender] = useState(setNumberOfProduct())
    const navigate = useNavigate()
    function setNumberOfProduct(){
        const windowWidth= parseInt(document.documentElement.clientWidth)
        // if(windowWidth > 900 ) return 5;
        if(windowWidth > 1060 ) return 4;
        if(windowWidth > 800 ) return 3;
        if(windowWidth > 550 ) return 2;
        return 1
    }
    window.addEventListener('resize',()=> {
        setProductsToRender(setNumberOfProduct())
    })
    const awaitChild = (products)=>{
        products.length = productsToRender
        const cards = products.map(
            product=> <ProductCard key={nanoid()}  {...product}/>
        )
        return cards
    }
    return(<>
        <div className="categorie-container">
            <header className="category-name" onClick={()=> navigate(`category/${category}`)}>{category}</header>
            <div className="products-container">
                <Suspense fallback={<h1>Products are loading...</h1>}>
                    <Await resolve={fetchData(category)}>
                        {awaitChild}
                    </Await>
                </Suspense>
            </div>
        </div>

        </>
    )
}