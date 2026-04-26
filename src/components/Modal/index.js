import React from 'react'
import './index.css'
export default function modal() {
  return (
    <div className='modal-backdrop'>
        <div className='modal'>
            <h1>Zoom class is available now</h1>
            <p>Feel free to <a href='#'>Join</a> here!</p>
        </div>
    </div>
  )
}
