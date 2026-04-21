import logo from './logo.svg';
import './App.css';
import Image from './assets/image.jpg';

function App() {
  let name = "Brian";
  let changeName = () => {
    name = "Aung Naing";
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
