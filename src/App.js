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
      <Modal>
        <h1>Zoom class is available now.</h1>
        <p>Feel free to <a href='#'>Join</a> here.</p>
      </Modal>
    </>
  );
}

export default App;
