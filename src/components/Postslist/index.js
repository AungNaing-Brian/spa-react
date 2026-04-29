import React from 'react'
import './index.css'
export default function Postslist({post}) {
  return (
    <div className='.postslist-component'>
      <div className='postlist'>
        {post.map(posts=>(<div className='single-post' key={posts.id}>{posts.title}</div>))}
    </div>
    </div>
    
  )
}
