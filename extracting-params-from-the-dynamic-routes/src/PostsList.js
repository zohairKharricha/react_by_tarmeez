import {Link} from "react-router-dom";
import PostDetails from "./PostDetails";
import {postsContext} from "./contexts/PostsContext";
import {useContext} from "react";

function PostsList() {
  const posts = useContext(postsContext);
  const postsList = posts.map((post) => {
    return (
      <Link to={`/postDetails/${post.id}`} key={post.id}>
        <div style={{background: "orange", padding: "20px", marginTop: "10px"}}>
          <h1>{post.title}</h1>
        </div>
      </Link>
    );
  });
  return <>{postsList}</>;
}

export default PostsList;
