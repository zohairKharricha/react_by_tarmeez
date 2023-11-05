import {useState} from "react";
export default function MyInput() {
  let [myInputValue, setMyInputValue] = useState("");

  function handelInputChange(event) {
    setMyInputValue(event.target.value);
  }
  return (
    <div>
      <label>Your Name:</label>
      <input value={myInputValue} onChange={handelInputChange} />
    </div>
  );
}
