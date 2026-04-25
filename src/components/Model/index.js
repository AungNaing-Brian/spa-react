import React from 'react'

export default function Model({children}) {
  return (
    <div className='modal-backdrop'>
        <div className='modal'>
            {children}
        </div>
    </div>
  )
}
