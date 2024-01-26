import "./App.css";
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  function updateCount(amount) {
    setCount(count + amount);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={() => updateCount(1)}>Add 1</button>   
      <br></br>
      <button onClick={() => updateCount(2)}>Add 2</button>
    </>
  )
}

export default App;
