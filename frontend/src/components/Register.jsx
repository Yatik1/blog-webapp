import React ,{ useState } from 'react';

import './style.css'
import { Link } from 'react-router-dom'


function Register() {
  
   const [username, setUsername] = useState('');
   const [password , setPassword] = useState('');

   async function register(ev){
       ev.preventDefault();
       await fetch('http://localhost:4000/register' , {
           method: 'POST',
           body: JSON.stringify({username ,password}),
           headers: {'Content-Type': 'application/json'},
       })
   }

  return (
    <form className='register' onSubmit={register}>
      <h1>Register</h1>
    <input type="text" 
            placeholder='username' 
            value={username} 
            onChange={e=> setUsername(e.target.value)}/>

    <input type="password"
           placeholder='password'
            value={password} 
            onChange={e => setPassword(e.target.value)}/>
            
     <button>Register</button>

     <footer>
     <Link to="/login">Already registered? Login Now</Link>
     </footer>
   </form>
  )
}

export default Register