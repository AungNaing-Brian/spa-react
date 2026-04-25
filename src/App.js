import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/index';
import Postslist from './components/Postslist';
import Model from './components/Model'

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
      <Model>
        <h1>
          Terms and Coditions
        </h1>
        <p>
          contents .......
        </p>
      </Model>
    </>
  );
}

export default App;
