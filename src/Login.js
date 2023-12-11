import React, { useState } from 'react';
import './Login.css';
import ReactDOM from 'react-dom/client';
    
function Login() {
    const [sigupForm,setSignUpForm]=useState(false);
    function OpenSignUpForm(){
        setSignUpForm((form)=>!form);
    }
    return (
        <div>
            <div className="body-container">
                <div className={`${sigupForm?'right-panel-active':""} container `} id="container">
                    <div>
                        <div className="form-container sign-up-container">
                            <form action="#" className='login-container' >
                                <h1>Create Account</h1>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <div className="btn-grad">Sign Up</div>
                            </form>
                        </div>
                        <div className="form-container sign-in-container">
                            <form action="#" className='login-container'>
                                <h1>Sign In</h1>
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <a href="#">Forgot your password?</a>
                                <div className="btn-grad">Sign In</div>
                            </form>
                        </div>
                    </div>

                    <div>
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1>Welcome Back!</h1>
                                    <p>
                                        Start from where you left
                                    </p>
                                    <div className="btn-grad" id="signIn" onClick={OpenSignUpForm}>Sign In</div>
                                </div>
                                <div className="overlay-panel overlay-right">
                                    <h1>Hello, Buddy!</h1>
                                    <p>Join Us on a new adventure</p>
                                    <div className="btn-grad" id="signUp" onClick={OpenSignUpForm}>Sign Up</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login;