import { Form } from "react-router-dom";

export default function SearchBar({inputField, ...rest}){
    return(
        <div {...rest}>
            <Form>
                {inputField}
            </Form>
        </div>
    )
}