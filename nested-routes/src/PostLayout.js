import {Outlet} from "react-router-dom";
function PostLayout() {
  return (
    <>
      <div style={{background: "green"}}>
        <h1>Post</h1>
      </div>

      <div>
        <Outlet />
      </div>

      <div style={{background: "green"}}>
        <h1>Post</h1>
      </div>
    </>
  );
}

export default PostLayout;
