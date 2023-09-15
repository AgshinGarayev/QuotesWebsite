import { useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  const handleSubmit=(e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/sendData', {username,email,password}).then(result => console.log(result)
    ,navigate('/login')
    ).catch(err => console.log(err))
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
    
    <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
            <h2>REGISTER</h2>
            <input type="text" 
            placeholder="Username" 
            id="username" 
            name="username"
            required 
            onChange={(e)=> setUsername(e.target.value)}></input>
            <input type="email" 
            placeholder="Email"
            id="email"
            name="email"
            required 
            onChange={(e)=> setEmail(e.target.value)}></input>
            <input type="password"
            placeholder="******"
            id="password"
            name="password"
            required
            onChange={(e)=> setPassword(e.target.value)} ></input>
           
            <button type="submit">Register</button> 
            
            </form>
        <div className="login-link">
            <p>Already have an account? <Link to={"/login"}>Login here</Link></p>
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
    
  )
}

export default Signup