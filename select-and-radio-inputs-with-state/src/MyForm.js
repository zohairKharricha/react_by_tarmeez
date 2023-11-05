import {useState} from "react";
export default function MyForm() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    age: "",
    isStudent: false,
    generalInfo: "",
    country: "",
    status: "",
  });

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(formInputs);
        }}
      >
        <label>Name: </label>
        <input
          value={formInputs.name}
          onChange={(event) => {
            setFormInputs({...formInputs, name: event.target.value});
          }}
        />
        <hr />
        <label>Email: </label>
        <input
          value={formInputs.email}
          onChange={(event) => {
            setFormInputs({...formInputs, email: event.target.value});
          }}
        />
        <hr />
        <label>Age: </label>
        <input
          value={formInputs.age}
          onChange={(event) => {
            setFormInputs({...formInputs, age: event.target.value});
          }}
        />
        <hr />
        <label>Are you a student: </label>
        <input
          type="checkbox"
          checked={formInputs.isStudent}
          onChange={(event) => {
            setFormInputs({...formInputs, isStudent: event.target.checked});
          }}
        />
        <hr />
        <select
          value={formInputs.country}
          onChange={(event) => {
            setFormInputs({...formInputs, country: event.target.value});
          }}
        >
          <option>KSA</option>
          <option>Egypt</option>
          <option>Morocco</option>
        </select>
        <hr />
        <div>
          <input
            value="student"
            type="radio"
            name="status"
            checked={formInputs.status === "student"}
            onChange={(event) => {
              setFormInputs({...formInputs, status: event.target.value});
            }}
          />
          <label>Students</label>
          <input
            value="teacher"
            type="radio"
            name="status"
            checked={formInputs.status === "teacher"}
            onChange={(event) => {
              setFormInputs({...formInputs, status: event.target.value});
            }}
          />
          <label>Teacher</label>
        </div>
        <hr />
        <label>General Info: </label>
        <textarea
          value={formInputs.generalInfo}
          onChange={(event) => {
            setFormInputs({...formInputs, generalInfo: event.target.value});
          }}
        />
        <hr />
        <button>Submit</button>
      </form>
    </div>
  );
}
