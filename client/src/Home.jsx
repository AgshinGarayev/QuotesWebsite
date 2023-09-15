import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import axios from 'axios';
import QuoteCard from './QuoteCard';
import './QuoteCard.css'
function Home() {
    const [quotes, setQuotes] = useState([])

  
    useEffect(() => {
      axios
        .get('http://localhost:3001/getQuotes')
        .then((response) => {
          setQuotes(response.data.reverse()); // Reverse the order of quotes
        })
        .catch((err) => console.log(err));
    }, []);


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
                <li> <Link to={"/postquote"}>My Quotes</Link></li>
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
      
      <div className="center">
        <div className="scrollable-container">
          <div className="quote-card-container">
            {quotes.map((quote, index) => (
              <QuoteCard key={index} author={quote.author} quote={quote.quote} />
            ))}
          </div>
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

export default Home;