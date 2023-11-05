import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Hello from "./Hello";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>Hello</button>
        </li>
        <li>
          <button>Posts</button>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </div>
  );
}

export default App;
