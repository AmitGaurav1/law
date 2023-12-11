import React, { useState } from 'react';
import './Login.css';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';


    
function Login() {
    const [sigupForm,setSignUpForm]=useState(false);
    function OpenSignUpForm(){
        setSignUpForm((form)=>!form);
    }

    // States for signin account 
    const [signinemail,setsigninemail]=useState("");
    const[signinpassword,setsigninpassword]=useState("");
    const [signinsuccessfull,setsigninsuccessfull]=useState("");
    const [signinerror,setsigninerror]=useState("");
    async function signinsubmit() {
        const data = {
          email: signinemail,
          password: signinpassword,
        };
      
        try {
          const response = await fetch("http://localhost:3002/signin", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
      
          if (!response) {
           setsigninerror("Sign in Failed")
          }
      
          const result = await response.json();
          setsigninsuccessfull(result.message);
          setsigninerror('');
        } catch (err) {
          setsigninsuccessfull('');
          setsigninerror(err.message || 'An error occurred');
        }
      }
      

    //   states for login 
    const [loginemail,setloginemail]=useState("");
    const[loginpassword,setloginpassword]=useState("");
    const [loginsuccessfull,setloginsuccessfull]=useState("");
    const [loginerror,setloginerror]=useState("");

    const navigate=useNavigate();
    const loginsubmit=async ()=>{
        const data={
            email:loginemail,
            password:loginpassword,
        }
        try{
        const response=await fetch('http://localhost:3002/login',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
      
          if (!response) {
           setloginerror("Log in Failed")
          }
      
          const result = await response.json();
          setloginsuccessfull(result.message);
          setloginerror('');
          setloginemail('')
          setloginpassword('');
          setTimeout(() => {
            navigate('/');
            
          }, 2000);
        } catch (err) {
          setloginsuccessfull('');
          setloginerror(err.message || 'An error occurred');
        }
      }




      
    return (
        <div>
            <div className="body-container">
                <div className={`${sigupForm?'right-panel-active':""} container `} id="container">
                    <div>
                        <div className="form-container sign-up-container">
                            <form action="#" >
                                <h1>Create Account</h1>
                                <input type="text" placeholder="Name" />
                                <input type="email" value={signinemail} onChange={(event)=>{setsigninemail(event.target.value)}} placeholder="Email" />
                                
                                <input type="password" value={signinpassword} onChange={(event=>{setsigninpassword(event.target.value)})} placeholder="Password" />
                                <button className="btn-grad" onClick={signinsubmit}>Sign Up</button>
                                {signinsuccessfull}{signinerror}
                            </form>
                        </div>
                        <div className="form-container sign-in-container">
                            <form action="#">
                                <h1>Sign In</h1>
                                <input type="email" value={loginemail} onChange={(event)=>setloginemail(event.target.value)} placeholder="Email" />
                                <input type="password" value={loginpassword} onChange={(event)=>setloginpassword(event.target.value)} placeholder="Password" />
                                <a href="#">Forgot your password?</a>
                                <button className="btn-grad" onClick={loginsubmit}>Log In</button>
                                {loginsuccessfull}{loginerror}
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