import "./App.css";
import {Route, Routes, Link} from "react-router-dom";
import Home from "./Home";
import Hello from "./Hello";
import PostsList from "./PostsList";
import PostDetails from "./PostDetails";

function App() {
  return (
    <div className="App">
      <Link to={"/"}>
        <button style={{fontSize: "30px"}}>Home</button>
      </Link>
      <Link to={"/hello"}>
        <button style={{fontSize: "30px"}}>Hello</button>
      </Link>
      <Link to={"/posts"}>
        <button style={{fontSize: "30px"}}>Posts</button>
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/postDetails/:postId" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
