import {useState} from "react";

export default function MyButton() {
  console.log("render");
  const [name, setName] = useState("Kronos");

  function buttonClicked() {
    name === "Kronos" ? setName("Zohair") : setName("Kronos");
  }
  return (
    <div>
      <button onClick={buttonClicked}>Click Me!</button>
      <h1>{name}</h1>
    </div>
  );
}
