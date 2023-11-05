import {useParams} from "react-router-dom";
import {useContext} from "react";
import {postsContext} from "./contexts/PostsContext";

function PostDetails() {
  const posts = useContext(postsContext);
  const {postId} = useParams();

  const post = posts.find((p) => p.id == postId);
  console.log(post);

  if (post) {
    return (
      <>
        <h1>Post Details Page</h1>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </>
    );
  } else {
    return (
      <>
        <h1>The Post With Id:{postId} Is Not Exist</h1>
      </>
    );
  }
}

export default PostDetails;
