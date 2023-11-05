import {useState} from "react";

export default function MyForm() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
  });
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label>Name:</label>
      <input
        value={formInputs.name}
        onChange={(event) => {
          setFormInputs({name: event.target.value});
        }}
      />

      <hr />

      <label>Email:</label>
      <input
        value={formInputs.email}
        onChange={(event) => {
          setFormInputs({email: event.target.value});
        }}
      />

      <hr />

      <button type="submit">Submit</button>
    </form>
  );
}
