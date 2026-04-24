import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/index';
import Postslist from './components/Postslist';

function App() {
  let [posts, setPosts] = useState([
    {id: 1,
     title: 'first post',
    },
    {
      id: 2,
      title: 'second post',
    },
    {
      id: 3,
      title: 'third post'
    },
  ]);

  return (
    <>
      <Navbar></Navbar>
      <Postslist post={posts}/>
    </>
  );
}

export default App;
