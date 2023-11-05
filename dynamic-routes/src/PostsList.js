import {Link} from "react-router-dom";
import PostDetails from "./PostDetails";

let posts = [
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
function PostsList() {
  const postsList = posts.map((post) => {
    return (
      <Link to={"/postDetails/"} key={post.id}>
        <div style={{background: "orange", padding: "20px", marginTop: "10px"}}>
          <h1>{post.title}</h1>
        </div>
      </Link>
    );
  });
  return <>{postsList}</>;
}

export default PostsList;
