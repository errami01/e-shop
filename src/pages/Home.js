import Categorie from "../components/Categorie"
import { useLoaderData } from "react-router-dom"
import { getData } from "../utils/fetcher"

export async function loader(){
    const categories =  await getData('categories')
    const products =  await getData()
    return [categories, products]
        
}
export default function Home(){
    const loadedData = useLoaderData()
    console.log(loadedData[0])
    return(
        <Categorie name="men's clothing" imgUrl="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"/>
    )
}