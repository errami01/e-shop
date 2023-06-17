import './Login.css'
import InputComponent from '../components/InputComponent'
import { Form, redirect } from 'react-router-dom'
import { loginUser } from '../utils/fetcher'
import { useActionData } from 'react-router-dom'

export async function action({request}){
    const formData = await request.formData()
    const username =  formData.get('username')
    const password = formData.get('password')
    try{
         await loginUser(username, password)
         return redirect("/customer")
    }
    catch(e){
        return e.message
    }
    
}
export default function Login(){
    const errorMessage = useActionData()
    return(
        <div className="login-container">
            
            <span className='big-user-icon--login'>
                <i className="fa-regular fa-user" ></i>
            </span>
            <h3 className='sign-in-urge--login'>Sign in to your account</h3>
            {errorMessage && <h5 className='error-message-login'>{errorMessage}</h5>}
            <Form method='post' className='form--login'>
                <InputComponent 
                    name='username'
                    label='Username' 
                    type='text'
                    icon = {<i className="fa-solid fa-user fa" ></i>}
                    required
                    />
                <InputComponent 
                    name='password'
                    label='Password' 
                    type='password'
                    icon={<i className="fa-solid fa-key fa"></i>}
                    required
                />  
                <button className='submit-btn--login'>Login</button>
            </Form>
        </div>
    )
}