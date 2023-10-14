import { Form, Link } from "react-router-dom";
import {nanoid} from "nanoid"
import './SearchBar.css'
import { useState } from "react";
import { myFetch } from "../utils/fetcher";

export default function SearchBar({className,inputClassName, ...rest}){
    const [suggestions, setSuggestions] = useState([])
    const handleInputChange = async (e)=>{
        const inputValue = e.target.value.toLowerCase()
        if(inputValue){
            const suggestionsResponse = await myFetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/products.json?orderBy="lowerCaseTitle"&startAt="${inputValue}"&endAt="${inputValue}\\uf8ff"`)
            const suggestionsArray = Object.values(suggestionsResponse)
            setSuggestions(suggestionsArray.length >0 ? suggestionsArray : [{title: "Nothing Found"}])
        }
        else setSuggestions([])
    }
    const suggestionElements= suggestions.map((element)=>{
        return (
        <Link 
            key={nanoid()} 
            to={`/${element.category}/${element.id}`} 
            className="suggestion--searchbar"
        >
            {element.title}
        </Link>)
    })
    return(
        <div className={`container--searchbar ${className}`}{...rest}>
            <Form autoComplete="off">
                <i className="fa-solid fa-magnifying-glass search-icon--searchbar"></i>
                <input
                    type="search"
                    className={`${inputClassName}`}
                    placeholder='Search for a product...'
                    onChange={handleInputChange}
                />
                <ul className="suggestion-list--searchbar">
                    {suggestionElements}
                </ul>
            </Form>
        </div>
    )
}