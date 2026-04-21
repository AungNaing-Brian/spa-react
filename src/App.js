import logo from './logo.svg';
import './App.css';
import Image from './assets/image.jpg';
import { useState } from 'react';

function App() {
  let [name, setName] = useState("Brian")
  let changeName = () => {
    setName("Aung Naing");
    console.log(name);
  }

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
  console.log(posts);

  return (
    <div className="App">
      <h1>Hello Friend</h1>
      <h2>This is {name}.</h2>
      <img src={Image} alt=''></img>
      <button onClick={changeName}>Change Name</button>
      <h1>Posts</h1>
      <ul>
        {posts.map((post)=>(
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
