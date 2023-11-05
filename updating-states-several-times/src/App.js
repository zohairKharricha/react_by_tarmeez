import "./App.css";
import {useState} from "react";
function App() {
  const [count, setCount] = useState(0);

  function handleCountPlusClick() {
    setCount(count + 1);
    setCount((c) => {
      return c + 1;
    });
    // setCount(count + 1);
  }
  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={handleCountPlusClick}> + </button>
    </div>
  );
}

export default App;
