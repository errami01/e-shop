import { Form } from "react-router-dom";
import './SearchBar.css'

export default function SearchBar({inputField,className, ...rest}){
    return(
        <div className={`container--searchbar ${className}`}{...rest}>
            <Form>
                {inputField}
            </Form>
            <ul className="suggestion-list--searchbar">
            </ul>
        </div>
    )
}