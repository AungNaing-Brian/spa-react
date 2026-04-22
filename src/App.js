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

  // let [count, setCount] = useState(0);

  // let increment = () => {
  //   // setCount(count+1); //don't write like this 
  //   setCount((prevState)=>prevState+1);//write like this 
  //   setCount((prevState)=>prevState+1);//so you can write like this, it will work here. if you write count+1 it will not work it will work only +1+1.
  // }

  let deletePost = (id)=>{
    setPosts((prevState)=>prevState.filter(post=>post.id!=id))
  }
  return (
    <div className="App">
      <h1>Hello Friend</h1>
      <h2>This is {name}.</h2>
      <img src={Image} alt=''></img>
      <button onClick={changeName}>Change Name</button>
      <h1>Posts</h1>
      <div className='list'>
        <ul>
        {posts.map((post)=>(
          <li key={post.id}>
            {post.title}
            <button onClick={()=>deletePost(post.id)}>delete</button>
            </li>
        ))}
      </ul>
      </div>
      {/* <div className='counterState'>
        <h1>Counter</h1>
        <h3>Count - {count}</h3>
        <button onClick={increment}>Increment</button>
      </div> */}

    </div>
  );
}

export default App;
