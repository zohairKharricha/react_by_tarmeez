function Post({title, body}) {
  return (
    <div
      style={{
        padding: "10px",
        border: "5px solid teal",
        margin: "25px ",
      }}
    >
      <h2>{title}</h2>
      <hr />
      <p>{body}</p>
    </div>
  );
}
export default Post;
