import {Link} from "react-router-dom";
function NotFound() {
  return (
    <>
      <h1>404 (Not Found)</h1>
      <h3>The url you visited is not defined</h3>

      <Link to="/">
        <button>Return Back To The Home Page</button>
      </Link>
    </>
  );
}

export default NotFound;
