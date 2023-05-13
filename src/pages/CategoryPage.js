import Product from "../components/ProductCard"
import "./CategoryPage.css"
import { getProductsByCategory } from "../utils/fetcher" 
import { useLoaderData } from "react-router-dom"

export function loader({params}){
    return getProductsByCategory(params.category)
}
export default function CategoryPage(){
    const products = useLoaderData()
    const productComponents = products.map(
        (product)=>{

            return <Product 
                key={product.id}
                {...product}
                // title={product.title}
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