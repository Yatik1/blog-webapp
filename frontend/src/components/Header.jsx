import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
   <main>
     <header>
        <Link to="/" className='logo'>MyBlog</Link>
         <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
         </nav>
     </header>
   </main>
  )
}

export default Header
