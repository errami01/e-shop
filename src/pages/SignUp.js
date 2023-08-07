import { Form } from "react-router-dom";
import InputComponent from "../components/InputComponent";

export default function SignUp(){
    return(
        <div className="container--signUp">
            <Form>
                <InputComponent 
                    type='email'
                />
            </Form>
        </div>
    )
}