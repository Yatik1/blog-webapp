import React, { useEffect, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Header() {

  const [username , setUsername] = useState(null)

  useEffect(() => {
     fetch('http://localhost:4000/profile' , {
       credentials: 'include',
     }).then( response => {
         response.json().then(userInfo => {
           setUsername(userInfo.username);
         })
     })
  },[])

  function logout() {
    fetch('http://localhost:4000/logout' , {
      credentials:'include' , 
      method:'POST',
    })
    setUsername(null);
  }

  return (
   <main>
     <header>
        <Link to="/" className='logo'>MyBlog</Link>
         <nav>
           {username && (
            <>
              <Link to='/create'>Create new post</Link>
              <a onClick={logout}>Logout</a>
            </>
           )}
           {!username && (
            <>
                 <Link to="/login">Login</Link>
                 <Link to="/register">Register</Link>
            </>
           )}

         </nav>
     </header>
   </main>
  )
}

export default Header
