export default function Article({
  children,
  content = "No Content",
  personName,
  email,
  birthday,
}) {
  return (
    <>
      <div
        style={{
          background: "white",
          boxShadow: "0 10px 10px gray",
          color: "black",
          margin: "10px",
        }}
      >
        <h1>{personName}</h1>
        <h3>{email}</h3>
        <h3>{birthday}</h3>
        <hr />
        <hr />

        <p>{children} </p>
      </div>
    </>
  );
}
