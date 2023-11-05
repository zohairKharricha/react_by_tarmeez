import "./App.css";
import {Route, Routes, Link} from "react-router-dom";
import Home from "./Home";
import Hello from "./Hello";
import PostsList from "./PostsList";
import PostDetails from "./PostDetails";
import NotFound from "./NotFound";
import NewPost from "./NewPost";
import DeletePost from "./DeletePost";
import PostLayout from "./PostLayout";
import {postsContext} from "./contexts/PostsContext";

function App() {
  let postsData = [
    {
      id: 1,
      title: "First Post",
      body: "lorem fsdfdsgdsgfdsgdsfdsf 01",
    },
    {
      id: 2,
      title: "Second Post  ",
      body: "lorem fsdfdsgdsgfdsgdsfdsf 02",
    },
    {
      id: 3,
      title: "Third Post",
      body: "lorem fsdfdsgdsgfdsgdsfdsf 03",
    },
  ];
  return (
    <postsContext.Provider value={postsData}>
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
          <Route path="/posts" element={<PostLayout />}>
            <Route index={true} element={<PostsList />} />

            <Route path=":postId" element={<PostDetails />} />
            <Route path="new" element={<NewPost />} />
            <Route path="delete" element={<DeletePost />} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/hello" element={<Hello />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </postsContext.Provider>
  );
}

export default App;
