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
  return (
    <div className="App">
      <h1>Hello Friend</h1>
      <h2>This is {name}.</h2>
      <img src={Image} alt=''></img>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default App;
