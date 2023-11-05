import {useState} from "react";

export default function MyForm() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    age: "",
    generalInfo: "",
    isStudent: false,
  });
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(formInputs);
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

      <label>Are you student</label>
      <input
        type="checkbox"
        checked={formInputs.isStudent}
        onChange={(event) => {
          setFormInputs({...formInputs, isStudent: event.target.checked});
        }}
      />
      <hr />
      <label>General Info</label>
      <textarea
        value={formInputs.generalInfo}
        onChange={(event) => {
          setFormInputs({...formInputs, generalInfo: event.target.value});
        }}
      />
      <hr />

      <button type="submit">Submit</button>
    </form>
  );
}
