import { useState } from 'react'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import PostQuote from './PostQuote'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  

  return (
    <BrowserRouter>
    <Routes>
     <Route path='/register' element={<Signup />}></Route>
     <Route path='/login' element={<Login />}></Route>
     <Route path='/home' element={<Home />}></Route>     
     <Route path='/postquote' element={<PostQuote />}></Route>   
    </Routes>
    </BrowserRouter>
  )
}

export default App
