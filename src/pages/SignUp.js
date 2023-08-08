import { Form } from "react-router-dom";
import {InputComponent} from "../components/InputComponent";
import { useRef } from "react";

export default function SignUp(){
    const emailInputElement = useRef()
    const emailContainerElement = useRef()
    const passInputElement = useRef()
    const passContainerElement = useRef()
    function checkEmail(){
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(!emailInputElement.current.value.match(pattern)){
            emailContainerElement.current.style.setProperty('--theme-color', 'red')
            emailContainerElement.current.setAttribute('invalidMessage', 'Please enter a valid email')
            return 
        }
    }
    function checkEmailOnChange(){
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(emailInputElement.current.value.match(pattern)){
            emailContainerElement.current.style.setProperty('--theme-color', 'var(--first-Color)')
            emailContainerElement.current.setAttribute('invalidMessage', '')
            return 
        }
    }
    function checkPass(){
        const pattern = /^[a-zA-Z0-9]{4,}$/
        if(!passInputElement.current.value.match(pattern)){
            passContainerElement.current.style.setProperty('--theme-color', 'red')
            passContainerElement.current.setAttribute(
                'invalidMessage', 'Minimum 4 alphanum characters (ex: 1234 ) :)')
            return
        }
        
    }
    function checkPassOnChange(){
        const pattern = /^[a-zA-Z0-9]{4,}$/
        if(passInputElement.current.value.match(pattern)){
            passContainerElement.current.style.setProperty('--theme-color', 'var(--first-Color)')
            passContainerElement.current.setAttribute('invalidMessage', '')
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
                    onChange = { checkEmailOnChange }
                    required
                    />
                <InputComponent 
                    ref = {
                        {
                            inputRef: passInputElement,
                            containerRef: passContainerElement,
                        }}
                    name='password'
                    label='Password' 
                    type='password'
                    icon={<i className="fa-solid fa-key fa"></i>}
                    onBlur= {checkPass}
                    onChange= { checkPassOnChange }
                    required
                />  
                <button className='submit-btn--login'>Sign up</button>
            </Form>
        </div>
    )
}