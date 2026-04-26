import React, { Children } from 'react'
import './index.css'
import ReactDom from 'react-dom';

export default function modal({children}) {
  return (
    ReactDom.createPortal(
       <div className='modal-backdrop'>
        <div className='modal'>
            {children}
        </div>
    </div> ,
    document.getElementById('modal')
    )
    
  )
}
