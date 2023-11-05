import {useState} from "react";

function MyForm() {
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployee: false,
    salary: "",
  });
  return (
    <div
      style={{
        textAlign: "center",
        border: "1px solid #000",
        padding: "30px",

        width: "80vw",
      }}
    >
      <h2>Requesting a Loan</h2>
      <hr />
      <form
        onChange={(event) => {
          event.preventDefault();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          rowGap: "10px",
          alignItems: "center",
        }}
      >
        <div className="inp-grp">
          <label>Name:</label>
          <input
            type="text"
            value={inputs.name}
            onChange={(event) => {
              setInputs({...inputs, name: event.target.value});
            }}
          />
        </div>
        <div className="inp-grp">
          <label>Phone Number:</label>
          <input
            type="text"
            value={inputs.phone}
            onChange={(event) => {
              setInputs({...inputs, phone: event.target.value});
            }}
          />
        </div>
        <div className="inp-grp">
          <label>Age:</label>
          <input
            type="text"
            value={inputs.age}
            onChange={(event) => {
              setInputs({...inputs, age: event.target.value});
            }}
          />
        </div>
        <div className="inp-grp">
          <label>Are you an employee:</label>
          <input
            type="checkbox"
            checked={inputs.isEmployee}
            onChange={(event) => {
              setInputs({...inputs, isEmployee: event.target.checked});
            }}
          />
        </div>

        <label>Salary</label>
        <select
          value={inputs.salary}
          onChange={(event) => {
            setInputs({...inputs, salary: event.target.value});
          }}
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default MyForm;
