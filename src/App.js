import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/index';
import Postslist from './components/Postslist/index';
import Modal from './components/Modal/index';
import PostForm from './components/PostForm/index';

function App() {
  let [showModal,setShowModal] = useState(false);
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
      <Navbar setShowModal={setShowModal}></Navbar>
      <Postslist post={posts}/>
      { showModal &&
        <Modal setShowModal={setShowModal}>
        <PostForm/>
      </Modal>
      }
      
      
    </>
  );
}

export default App;
