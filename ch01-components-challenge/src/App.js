import "./App.css";
import "./styleComponnets.css";
import MyHeaderComp from "./MyHeaderComponent";
import MyPostComp from "./PostComponents";
import MyBtnsComp from "./AllBtnsComponent";

function App() {
  return (
    <div className="App">
      <MyHeaderComp />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "18px",
          alignItems: "flex-start",
        }}
      >
        <div>
          <MyPostComp />
          <MyPostComp />
          <MyPostComp />
          <MyPostComp />
          <MyPostComp />
          <MyPostComp />
          <MyPostComp />
          <MyPostComp />
          <MyPostComp />
          <MyPostComp />
          <MyPostComp />
        </div>
        <MyBtnsComp />
      </div>
    </div>
  );
}

export default App;
