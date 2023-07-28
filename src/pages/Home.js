import CategoryContainer from "../components/CategoryContainer"
import { useLoaderData } from "react-router-dom"
import {fetchData} from "../utils/fetcher"
import "./Home.css"

export async function loader(){
    const categories =  await fetchData('categories')
    return {categories}     
}
export default function Home(){
    const loadedData = useLoaderData()
    const categoryElements = loadedData.categories.map(
        category=>{
            return <CategoryContainer 
                    category={category}
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