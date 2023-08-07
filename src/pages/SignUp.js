import { Form } from "react-router-dom";
import InputComponent from "../components/InputComponent";

export default function SignUp(){
    return(
        <div className="container--signUp">
            <From>
                <InputComponent 
                    type='email'
                />
            </From>
        </div>
    )
}