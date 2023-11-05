import {useContext} from "react";
import {LoanInputContext} from "./contexts/LoanFormInputContext";
import {UserContext} from "./contexts/UserContext";
export default function MyInput() {
  const inputContext = useContext(LoanInputContext);
  const userData = useContext(UserContext);

  console.log("the context from MyInput.js is ");
  console.log(inputContext);
  return (
    <>
      <label>
        {userData.userName}'s {inputContext.labelTitle}
      </label>
      <input
        value={inputContext.value}
        onChange={(event) => {
          inputContext.handleChange(event.target.value);
        }}
      />
    </>
  );
}
