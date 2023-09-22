import React from 'react'
import "../App.css"
function Post() {
  return (
    <main>
         <div className='post'>
            <div className='image'>
                <img src="https://i.pinimg.com/564x/b9/52/bb/b952bb9bb9d4048af66ee2d2321bf6e3.jpg" alt="" />
            </div>
            <div className='texts'>
                <h2>How to Write Vivid Descriptions</h2>
                <p className='info'>
                    <a className='author'>Yatik Srivastava</a>
                    <time>2023-04-06 12:00</time>
                </p>
                <p className='summary'>Author Eli K.P. William offers advice on how to write vivid descriptions while still being mindful of pacing and plot in a novel by using examples of the balance between the two.</p>
            </div>
         </div>
    </main>
  )
}

export default Post