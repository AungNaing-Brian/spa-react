import './App.css';
import { useState } from 'react';

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

    </>
  );
}

export default App;
