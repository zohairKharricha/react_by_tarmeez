import {useParams} from "react-router-dom";

function PostDetails({title, body}) {
  const {postId} = useParams();
  console.log(postId);
  return (
    <>
      <h1>Post Details Page</h1>
      <h1>{title}</h1>
      <p>{body}</p>
    </>
  );
}

export default PostDetails;
