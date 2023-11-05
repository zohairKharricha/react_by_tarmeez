import {UserContext} from "./contexts/UserContext";
import "./App.css";
import LoanForm from "./LoanForm";

function App() {
  return (
    <UserContext.Provider
      value={{
        userName: "@Kronos",
        name: "Zohair",
        email: "kharrichazohair@gmail.com",
      }}
    >
      <div className="App">
        <LoanForm />
      </div>
    </UserContext.Provider>
  );
}

export default App;
