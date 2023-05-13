import CategoryContainer from "../components/CategoryContainer"
import { useLoaderData } from "react-router-dom"
import { getData } from "../utils/fetcher"
import "./Home.css"

export async function loader(){
    const categories =  await getData('categories')
    const products =  await getData()
    return {categories, products}
        
}

export default function Home(){
    const loadedData = useLoaderData()
    const categoryElements = loadedData.categories.map(
        category=>{
            const fiveArr = []
            
            loadedData.products.forEach(product=>{
                if(fiveArr.length < 5){
                    
                    if(product.category===category){                     
                        fiveArr.push(product)
                    }
                }else return
            })
            return <CategoryContainer 
                    category={category}
                    products={fiveArr}
                    key={category}
                    />
        }
        
    )
    
    
    return(
        <div className="home-container">
        {categoryElements}
        </div>
        )
}