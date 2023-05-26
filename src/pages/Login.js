import './Login.css'
import InputComponent from '../components/InputComponent'
export default function Login(){
    return(
        <div className="login-container">
            
            <span className='big-user-icon--login'>
                <i className="fa-regular fa-user" ></i>
            </span>
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
            <button className='submit-btn--login'>Submit</button>
        </div>
    )
}