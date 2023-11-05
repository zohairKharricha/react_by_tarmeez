import {useContext, useState} from "react";
import "./FormStyles.css";
import Modal from "./Modal";
import MyComponent from "./MyComponent";
import {LoanInputContext} from "./contexts/LoanFormInputContext";
import {UseContext} from "react";
import {UserContext} from "./contexts/UserContext";
export default function LoanForm() {
  const userData = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const initialName = userData.name;
  const [loanInputs, setLoanInputs] = useState({
    name: initialName,
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salary: "",
    btnIsDisabled: false,
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const {age, phoneNumber} = loanInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("The Age Is Not Allowed ");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("Phone Number Format Is Incorrect");
    }
    setShowModal(true);
  }
  function handleDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }

  const btnIsDisabled =
    loanInputs.name === "" ||
    loanInputs.phoneNumber === "" ||
    loanInputs.age === "";

  function handlePhoneNumberChange(value) {
    setLoanInputs({...loanInputs, phoneNumber: value});
  }
  function handleNameChange(value) {
    setLoanInputs({...loanInputs, name: value});
  }
  function handleAgeChange(value) {
    setLoanInputs({...loanInputs, age: value});
  }

  return (
    <div
      className="flex"
      style={{
        height: "100vh",
        flexDirection: "column",
      }}
      onClick={handleDivClick}
    >
      <h1 style={{color: "#fff"}}>Hello {userData.name}</h1>
      <form id="loan-form" className="flex" style={{flexDirection: "column"}}>
        <h1>Requesting a loan</h1>
        <hr></hr>

        <LoanInputContext.Provider
          value={{
            labelTitle: "name",
            value: loanInputs.name,
            handleChange: handleNameChange,
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>
        <LoanInputContext.Provider
          value={{
            labelTitle: "phoneNumber",
            value: loanInputs.phoneNumber,
            handleChange: handlePhoneNumberChange,
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>
        <LoanInputContext.Provider
          value={{
            labelTitle: "age",
            value: loanInputs.age,
            handleChange: handleAgeChange,
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

        <label
          style={{
            marginTop: "30px",
          }}
        >
          Are you an employee:
        </label>
        <input
          type="checkbox"
          checked={loanInputs.isEmployee}
          onChange={(event) => {
            setLoanInputs({...loanInputs, isEmployee: event.target.checked});
          }}
        />

        <label>Salary:</label>
        <select
          value={loanInputs.salary}
          onChange={(event) => {
            setLoanInputs({...loanInputs, salary: event.target.value});
          }}
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>

        <button
          className={btnIsDisabled ? "disabled" : ""}
          onClick={handleFormSubmit}
          disabled={btnIsDisabled}
          id="submit-loan-btn"
        >
          Submit
        </button>
      </form>

      <Modal errorMessage={errorMessage} isVisible={showModal} />
    </div>
  );
}
