import './Login.css'
import InputComponent from '../components/InputComponent'
import { Form } from 'react-router-dom'

export function action(){
    console.log('this is Action in action')
    return null
}
export default function Login(){

    return(
        <div className="login-container">
            
            <span className='big-user-icon--login'>
                <i className="fa-regular fa-user" ></i>
            </span>
            <h3 className='sign-in-urge--login'>Sign in to your account</h3>
            <Form method='post' className='form--login'>
                <InputComponent 
                    label='Username' 
                    type='text'
                    icon = {<i className="fa-solid fa-user fa" ></i>}
                    />
                <InputComponent 
                label='Password' 
                type='password'
                icon={<i className="fa-solid fa-key fa"></i>}
                />  
                <button className='submit-btn--login'>Login</button>
            </Form>
        </div>
    )
}