import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Navigate} from "react-router-dom";

const modules = {
    toolbar : [
        [{'header' : [1,2,false] }],
        ['bold', 'italic', 'underline', 'strike','blockquote'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
        ['link', 'image'],
           
        ['clean'] 
    ]
  }

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
        <h3>Create Blog</h3>

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

             <ReactQuill modules={modules} 
                         value={content}
                         onChange={newValue=> setContent(newValue)} />

            <button style={{marginTop:'10px'}}>Post Your Blog</button>
        </form>
    </div>
  )
}

export default CreatePost
