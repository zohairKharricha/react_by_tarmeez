import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";

function App() {
  const posts = [
    {id: 1, postName: "title one", postBody: "hello world!"},
    {id: 2, postName: "title two", postBody: "post two"},
    {id: 3, postName: "title three", postBody: "post three"},
    {id: 4, postName: "title four", postBody: "post four"},
  ];
  const postsList = posts.map((post) => {
    return (
      <Post key={post.id} postName={post.postName} postBody={post.postBody} />
    );
  });
  return (
    <div className="App">
      <Header />
      <div style={{display: "flex", justifyContent: "center"}}>
        {/* POSTS & SIDE MENU CONTAINER */}
        <div
          style={{
            display: "flex",
            width: "80%",
          }}
        >
          {/* POSTS CONTAINER */}
          <div style={{width: "60%"}}>{postsList}</div>
          {/*== POSTS CONTAINER ==*/}

          {/* SIDE MENU CONTAINER */}
          <div style={{width: "40%"}}>
            <SideMenu />
          </div>
          {/*== SIDE MENU CONTAINER ==*/}
        </div>
        {/*== POSTS & SIDE MENU CONTAINER ==*/}
      </div>
    </div>
  );
}

export default App;
