import React, { Children } from 'react'
import './index.css'
export default function modal({children}) {
  return (
    <div className='modal-backdrop'>
        <div className='modal'>
            {children}
        </div>
    </div>
  )
}
