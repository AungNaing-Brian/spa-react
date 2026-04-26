import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/index';
import Postslist from './components/Postslist';
import Modal from './components/Modal'

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
      <Modal></Modal>
    </>
  );
}

export default App;
