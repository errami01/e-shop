import './Login.css'
import InputComponent from '../components/InputComponent'
import { Form } from 'react-router-dom'
import { loginUser } from '../utils/fetcher'

export async function action({request}){
    const formData = await request.formData()
    const username =  formData.get('username')
    const password = formData.get('password')
    return await loginUser(username, password)
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
                    name='username'
                    label='Username' 
                    type='text'
                    icon = {<i className="fa-solid fa-user fa" ></i>}
                    />
                <InputComponent 
                    name='password'
                    label='Password' 
                    type='password'
                    icon={<i className="fa-solid fa-key fa"></i>}
                />  
                <button className='submit-btn--login'>Login</button>
            </Form>
        </div>
    )
}