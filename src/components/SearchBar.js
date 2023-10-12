import { Form } from "react-router-dom";

export default function SearchBar({inputField, ...rest}){
    return(
        <div className="container--searchbar"{...rest}>
            <Form>
                {inputField}
            </Form>
            <ul className="suggestion-list--searchbar">
            </ul>
        </div>
    )
}