import React, { useContext, useEffect, useState } from 'react'
// import '../App.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'

function Header() {

  const {userInfo, setUserInfo} = useContext(UserContext);

  useEffect(() => {
     fetch('http://localhost:4000/profile' , {
       credentials: 'include',
     }).then( response => {
         response.json().then(userInfo => {
            setUserInfo(userInfo);
         })
     })
  },[])

  function logout() {
    fetch('http://localhost:4000/logout' , {
      credentials:'include' , 
      method:'POST',
    })
    setUserInfo(null);
  }

  const username = userInfo?.username;

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
