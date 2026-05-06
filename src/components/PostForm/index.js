import React from 'react'
import './index.css'
import { useState } from 'react';

export default function Index() {

    let [title, setTitle] = useState("")
    let resetForm = () => {
        setTitle('');
        console.log("updated Successfully")
    }

  return (
   <form className='post-form'>
    <h1>Create Post</h1>
    <div className='form-control'>
        <label>
            Title
        </label>
        <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title}></input>
    </div>
    <p>{title}</p>
    <button type='button' onClick={resetForm}>reset Form</button>
    <div className='form-control'>
        <button>Post Now</button>
    </div>
   </form>
  )
}
