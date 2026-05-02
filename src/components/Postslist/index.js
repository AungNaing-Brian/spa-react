import React from 'react'
import './index.css'
import styles from './single_post.module.css';

export default function Postslist({post}) {
  return (
   
      <div className='postlist container'>
        {post.map(posts=>(
          <div className={`single-post ${styles.card}`} key={posts.id}>{posts.title}</div>
          ))}
    </div>
    
    
  )
}
