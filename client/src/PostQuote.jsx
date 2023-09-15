import { useState } from 'react';
import './PostQuote.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function PostQuote() {
  const [author, setAuthor] = useState('')
  const [quote, setQuote] = useState('')
  const navigate = useNavigate();

  const handleSubmit= (e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/newQuote', {author,quote}).then(result => console.log(result)
    ,navigate('/home')
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

    <div className="post-container">
      <form className="post-form" onSubmit={handleSubmit}>
        <img src="post_up.png" className="top-left-logo" alt="Top Left Logo" />
        <img src="post_down.png" className="bottom-right-logo" alt="Bottom Right Logo" />
        <input type="text" placeholder="AUTHOR" id="author" name="author" required style={{ textAlign: 'center' }}   onChange={(e)=> setAuthor(e.target.value)}/>
        <input type="text" placeholder="QUOTE" id="quoteText" name="quoteText" required style={{ textAlign: 'center' }} onChange={(e)=> setQuote(e.target.value)}/>
        <button type="submit">Post</button>
      </form>
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

export default PostQuote;
