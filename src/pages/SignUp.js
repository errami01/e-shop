import { Form } from "react-router-dom";
import {InputComponent} from "../components/InputComponent";
import { useRef, useState } from "react";

export default function SignUp(){
    const [isFormReady, setIsFormReady] = useState({})
    const emailInputElement = useRef()
    const emailContainerElement = useRef()
    const passInputElement = useRef()
    const passContainerElement = useRef()
    function checkNegativeValidity(pattern, elementToCheck, elementToUpdate, message){
        if(!elementToCheck.current.value.match(pattern)){
            elementToUpdate.current.style.setProperty('--theme-color', 'red')
            elementToUpdate.current.setAttribute('invalidMessage', message)
            return 
        }
    }
    function checkPositiveValidity(pattern, elementToCheck, elementToUpdate){
        if(elementToCheck.current.value.match(pattern)){
            elementToUpdate.current.style.setProperty('--theme-color', 'var(--first-Color)')
            elementToUpdate.current.setAttribute('invalidMessage', '')
            setIsFormReady((prev)=> {
                return {
                    ...prev,
                    elementToCheck: true,
                }
            })
            return 
        }
        setIsFormReady((prev)=> {
            return {
                ...prev,
                elementToCheck: false,
            }
        })
    }
    function validateForm(){
        if(!Object.values(isFormReady).length) return false
        return Object.values(isFormReady).every((e)=> e)
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
                    onBlur = {()=> checkNegativeValidity(
                        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        emailInputElement,
                        emailContainerElement,
                        'Please enter a valid email'
                    )}
                    onChange = { ()=> checkPositiveValidity(
                        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        emailInputElement,
                        emailContainerElement,
                    ) }
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
                    onBlur= {()=> checkNegativeValidity(
                        /^[a-zA-Z0-9]{4,}$/,
                        passInputElement,
                        passContainerElement,
                        'Minimum 4 alphanum characters (ex: 1234 ) :)'
                    )}
                    onChange= { ()=> checkPositiveValidity(
                        /^[a-zA-Z0-9]{4,}$/,
                        passInputElement,
                        passContainerElement,
                    ) }
                    required
                />  
                <button className='submit-btn--login' disabled={!validateForm()}>Sign up</button>
            </Form>
        </div>
    )
}