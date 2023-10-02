import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor({value,onChange}) {

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

  return (
        <ReactQuill modules={modules} 
                    value={value}
                    onChange={onChange} />
    
  )
}

export default Editor

