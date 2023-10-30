import CategoryContainer from "../components/CategoryContainer"
import { useLoaderData, defer, Await } from "react-router-dom"
import { getCategories } from "../utils/fetcher"
import "./Home.css"
import { Suspense } from "react"
import HomeSkeleton from "./HomeSkeleton"

export async function loader(){
    return defer({categories: getCategories()})
}
export default function Home(){
    const loadedPromises = useLoaderData()
    const awaitChildren = (categories)=>{
         const categoryContainers =  categories.map(
                category=>{
                    return (
                        <CategoryContainer
                            category={category}
                            key={category}
                        />
                    )
                }
            )
        return (
                <div className="home-container">
                    {categoryContainers}
                </div>  
            )
    }
    return(
        <Suspense fallback={<HomeSkeleton />}>
            <Await resolve={loadedPromises.categories}>
                {awaitChildren}
            </Await>
        </Suspense>
        )
}