import { Form } from "react-router-dom";
import InputComponent from "../components/InputComponent";

export default function SignUp(){
    return(
        <div className="login-container">
            
            <span className='big-user-icon--login'>
                <i className="fa-regular fa-user" ></i>
            </span>
            <h3 className='sign-in-urge--login'>Create your account</h3>
            <Form method='post' className='form--login' replace>
                <InputComponent 
                    name='email'
                    label='Email' 
                    type='email'
                    icon = {<i className="fas fa-envelope"></i>}
                    required
                    />
                <InputComponent 
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