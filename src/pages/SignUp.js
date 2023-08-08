import { Form } from "react-router-dom";
import {InputComponent} from "../components/InputComponent";
import { useRef } from "react";

export default function SignUp(){
    const emailInputElement = useRef()
    const emailContainerElement = useRef()
    function checkEmail(){
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(!emailInputElement.current.value.match(pattern)){
            emailContainerElement.current.style.setProperty('--theme-color', 'red')
            emailContainerElement.current.setAttribute('invalidMessage', 'Please enter a valid email')
            return 
        }
    }
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
                    onBlur = {checkEmail}
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