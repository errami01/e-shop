import { Form } from "react-router-dom";
import {InputComponent} from "../components/InputComponent";
import { useRef } from "react";

export default function SignUp(){
    const emailInputElement = useRef()
    const emailContainerElement = useRef()
    return(
        <div className="login-container">
            
            <span className='big-user-icon--login'>
                <i className="fa-regular fa-user" ></i>
            </span>
            <h3 className='sign-in-urge--login'>Create your account</h3>
            <Form method='post' className='form--login' replace>
                <InputComponent 
                    ref = {{
                        inputRef:emailInputElement, 
                        containerRef: emailContainerElement, 
                    }}
                    name='email'
                    label='Email' 
                    type='email'
                    icon = {<i className="fas fa-envelope"></i>}
                    required
                    />
                <InputComponent 
                    ref = {passElement}
                    name='password'
                    label='Password' 
                    type='password'
                    icon={<i className="fa-solid fa-key fa"></i>}
                    required
                />  
                <button className='submit-btn--login'>Sign up</button>
            </Form>
        </div>
    )
}