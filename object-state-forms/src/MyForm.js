import {useState} from "react";

export default function MyForm() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    age: "",
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
          setFormInputs({...formInputs, name: event.target.value});
        }}
      />

      <hr />

      <label>Email:</label>
      <input
        value={formInputs.email}
        onChange={(event) => {
          // const newFormInput = {...formInputs};
          // newFormInput.email = event.target.value;
          // setFormInputs(newFormInput);
          setFormInputs({...formInputs, email: event.target.value});
        }}
      />

      <hr />
      <label>Age:</label>
      <input
        value={formInputs.age}
        onChange={(event) => {
          setFormInputs({...formInputs, age: event.target.value});
        }}
      />

      <hr />

      <button type="submit">Submit</button>
    </form>
  );
}
