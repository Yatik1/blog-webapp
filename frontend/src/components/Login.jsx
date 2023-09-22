import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <form className="login">
      <h1>Login</h1>
      <input type="text" placeholder='username' />
      <input type="password" placeholder='password' />
       <button>Login</button>
     
     <footer>
     <Link to="/register">New User? Register Here First</Link>
     </footer>

    </form>

  )
}

export default Login