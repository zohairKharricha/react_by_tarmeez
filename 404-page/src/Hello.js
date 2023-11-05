import {Link} from "react-router-dom";

function Hello() {
  return (
    <>
      <h1>Hello World!</h1>
      <Link to="/">
        <div
          style={{
            padding: "10px",
            borderRadius: "20px",
            backgroundColor: "orange ",
          }}
        >
          <h1>Go To Home Page</h1>
        </div>
        {/* <button style={{fontSize: "30px"}}>Go Home</button> */}
      </Link>
    </>
  );
}

export default Hello;
