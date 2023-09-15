import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState();
  const [password,setPassword] = useState();
  const navigate = useNavigate();



const handleSubmit=(e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/login', {email,password}).then(result=>{
      console.log(result)
      if(result.data==="Success"){
        navigate('/home')
      }
    })
    .catch(err=> console.log(err))
  }


  return (
    <>
    
    <header>
        <nav>
            <div className="Logo">
                <Link to={"/home"}><img src="MyLogoo.png"></img></Link>
            </div>
            <ul class="nav-links">
                <li> <Link to={"/home"}>Home</Link> </li>
                <li> <Link to={"/home"}>Recents</Link> </li>
                <li> <Link to={"/home"}>My Quotes</Link></li>
            </ul>
            <div class="LoginAndRegister">
                <div class="Login">
                    <Link to={"/login"}>Login</Link>
                </div>
                <div class="Register">
                    <Link to={"/register"}>Register</Link>
                </div>
            </div>
        </nav>
      </header>

    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required onChange={(e)=> setEmail(e.target.value)}></input>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required onChange={(e)=>setPassword(e.target.value)}></input>
        <button type="submit">Login</button>
      </form>
      <div className="register-link">
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>

        <footer>
         <div className="footer-bottom">
           <p>
          Copyright &copy; 2021 TypingSpeed. Designed by <span>AGSHIN GARAYEV</span>
        </p>
        </div>
        </footer>
    
    </>
  );
}

export default Login;