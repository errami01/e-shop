import ProductCard from "../components/ProductCard"
import "./CategoryPage.css"
import {fetchData } from "../utils/fetcher" 
import { useLoaderData } from "react-router-dom"

export function loader({params}){
    return fetchData(params.category)
}
export default function CategoryPage(){
    const products = useLoaderData()
    const productComponents = products.map(
        (product)=>{

            return <ProductCard 
                key={product.id}
                {...product}
            />
        }   
    )
    return(
        <div className="categorypage-container">
            <div className="products-grid">
                {productComponents}
            </div>
        </div>
    )
}