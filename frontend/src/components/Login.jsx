import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Login() {

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  
   async function login(e){
     e.preventDefault();
     await fetch('http://localhost:4000/login',{
      method:'POST',
      body:JSON.stringify({username,password}),
      headers : {'Content-Type' : 'application/json'},
      credentials: 'include',
     })
   }

  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input type="text" 
             placeholder='username' 
             value={username}
             onChange={(e) => setUsername(e.target.value)}/>

      <input type="password" 
             placeholder='password'
             value={password}
             onChange={(e) => setPassword(e.target.value)} />

       <button>Login</button>
     
     <footer>
     <Link to="/register">New User? Register Here First</Link>
     </footer>

    </form>

  )
}

export default Login