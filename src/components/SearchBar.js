import { Form } from "react-router-dom";
import './SearchBar.css'

export default function SearchBar({inputField,className, ...rest}){
    return(
        <div className={`container--searchbar ${className}`}{...rest}>
            <Form>
                {inputField}
                <ul className="suggestion-list--searchbar">
                    <li>Ali</li>
                    <li>Ali</li>
                    <li>Ali</li>
                    <li>Ali</li>
                    <li>Ali</li>
                    <li>Ali</li>
                    <li>Ali</li>
                </ul>
            </Form>
        </div>
    )
}