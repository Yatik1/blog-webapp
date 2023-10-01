import React from 'react'
import "../App.css"

import {formatISO9075 } from 'date-fns';

function Post({_id,title,summary,cover,content,createdAt,author}) {
  return (
    <main>
         <div className='post'>
            <div className='image'>
                <img src="https://i.pinimg.com/564x/b9/52/bb/b952bb9bb9d4048af66ee2d2321bf6e3.jpg" alt="" />
            </div>
            <div className='texts'>
                <h2>{title}</h2>
                <p className='info'>
                    <a className='author'>Yatik Srivastava</a>
                    <time>{formatISO9075(new Date(createdAt))}</time>
                </p>
                <p className='summary'>{summary}</p>
            </div>
         </div>
    </main>
  )
}

export default Post