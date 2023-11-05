import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";

function App() {
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
          <div style={{width: "60%"}}>
            <Post title="title one" body="hello world!" />
            <Post title="title two" body="post two" />
            <Post title="Post Three" body="this is the body" />
          </div>
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
