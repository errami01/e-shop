import './Login.css'
export default function Login(){
    return(
        <div className="login-container">
            
            <span className='big-user-icon--login'>
                <i className="fa-regular fa-user" ></i>
            </span>
            <div className='username-input-container-login'>

                <i className="fa-solid fa-user fa" ></i>
                <input  className='username-input-login input--login' type="text" placeholder=' '/>
                <label className='username-label--login label--login'>User</label>
                <div className='bottom-line--login'></div>
            </div>
            {/* <label>Password</label> */}
            <div className='username-input-container-login'>
                <i className="fa-solid fa-key fa"></i>        
                <input  className='username-input-login input--login' type="password" placeholder=' '/>
                <label className='password-label--login label--login'/>
                <div className='bottom-line--login'></div>
            </div>
            <button className='submit-btn--login'>Submit</button>
        </div>
    )
}