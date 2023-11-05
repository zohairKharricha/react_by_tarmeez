import logo from "./logo.svg";
import "./App.css";

function App() {
  const tasks = [
    {id: 1, title: "doing my homework"},
    {id: 2, title: "reading a book"},
    {id: 3, title: "studying"},
    {id: 4, title: "cleaning my room"},
  ];
  const myTasksList = tasks.map((task) => {
    return (
      <div key={task.id} style={{background: "teal"}}>
        <h1>{task.title}</h1>
      </div>
    );
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <ul>{myTasksList}</ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
