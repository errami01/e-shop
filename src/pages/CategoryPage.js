import ProductCard from "../components/ProductCard"
import "./CategoryPage.css"
import {fetchData, getProductsByCategory } from "../utils/fetcher" 
import { useLoaderData, defer, Await } from "react-router-dom"
import { Suspense } from "react"
import Spinner from "../components/Spinner"

export function loader({params}){
    return defer({productsPromise: getProductsByCategory(params.category)})
}
export default function CategoryPage(){
    const loadedData = useLoaderData()
    const awaitChild=(products)=>{
        const productComponents = Object.values(products).map(
            (product)=>{
    
                return <ProductCard 
                    key={product.id}
                    {...product}
                />
            }   
        )
        return productComponents
    }
    
    return(
        <div className="categorypage-container">
            
            <div className="products-grid">
            <Suspense fallback={<Spinner/>}>
                <Await resolve={loadedData.productsPromise}>
                    {awaitChild}
                </Await>
            </Suspense>
                
            </div>
        </div>
    )
}