import { useState } from 'react';
import {Navigate} from "react-router-dom";
import Editor from '../Editor';


const CreatePost = () => {

  const [title,setTitle] = useState('')
  const [summary , setSummary] = useState('')
  const [content , setContent] = useState('')
  const [files,setFiles] =  useState('')
  const [redirect , setRedirect] = useState(false)

  async function createNewPost(e) {

     const data = new FormData()
     data.set('title' , title)
     data.set('summary' , summary)
     data.set('content' , content)
     data.set('file' , files[0]) 

     e.preventDefault();

     const response = await fetch('http://localhost:4000/post' , {
        method: 'POST', 
        body: data , 
        credentials: 'include' , 
     })

    //  await response.json();

    if(response.ok){
        setRedirect(true);
    }
  }

  if(redirect) {
    return <Navigate to={'/'}/>
  }

  return (
    <div>
        <h3>Write Your Blog</h3>

        <form onSubmit={createNewPost}>
            <input type="title" 
                   placeholder={'Title'}
                   value={title}
                   onChange={e=> setTitle(e.target.value)} />

            <input type="summary" 
                   placeholder={'Summary'} 
                   value={summary}
                   onChange={e => setSummary(e.target.value)}/>

            <input type="file" onChange={e => setFiles(e.target.files)}/>

            <Editor value={content} onChange={setContent}/>

            <button style={{marginTop:'10px'}}>Post Your Blog</button>
        </form>
    </div>
  )
}

export default CreatePost
