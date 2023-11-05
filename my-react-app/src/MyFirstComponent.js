import "./FirstComponentStyle.css";

export default function MyFirstComponent() {
  const x = 26;
  const person = {
    name: "zohair",
    email: "kharrichazohair@gmail.com",
  };
  const eltStyle = {
    backgroundColor: "blue",
    fontSize: "20px",
    boxShadow: "0 20px 10px black",
  };
  return (
    <div>
      <h1>{x + 10}Hello World! x + 10</h1>
      <h2>Hola Mundo!</h2>
      <h2 className={"active"} style={eltStyle}>
        {sayHello()}
      </h2>
      <h1 className={person.name === "zohair" ? "greenBg" : "redBg"}>
        Check Name
      </h1>
      <h2 style={eltStyle}>{person.name}</h2>
      <h3 className={"active redBg"}>{person.email}</h3>
      <button onClick={helloAlert}>Click Me! </button>
    </div>
  );
}

function sayHello() {
  return "Hello >>>";
}
function helloAlert() {
  alert("Hello");
}
