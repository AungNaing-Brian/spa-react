import React, { useRef } from 'react'
import './index.css'
import { useState } from 'react';

export default function Index({addPost}) {

    // let [title, setTitle] = useState("")

    let title = useRef();
    let resetForm = () => {
        // setTitle('');
        title.current.value='';
        console.log("updated Successfully")
    }
    let upload_post = (e)=>{
        e.preventDefault();
        let post = {
            id : Math.floor(Math.random()*10000),
            title : title.current.value
        }
        resetForm();
        addPost(post);
        console.log(post);
    }

  return (
   <form className='post-form' onSubmit={upload_post}>
    <h1>Create Post</h1>
    <div className='form-control'>
        <label>
            Title
        </label>
        <input type='text' ref={title}></input>
        {/* <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title}></input> */}
    </div>
    
    <div className='form-control'>
        <button>Post Now</button>
    </div>
   </form>
  )
}
