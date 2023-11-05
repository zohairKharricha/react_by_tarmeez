import logo from "./logo.svg";
import "./App.css";
import AnyNameStartWithCapitale from "./MyFirstComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to refresh.
        </p>
        <h1>Kronos</h1>
        <AnyNameStartWithCapitale />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <AnyNameStartWithCapitale />
        <p>
          Edit <code>src/App.js</code> and save to refresh.
        </p>
        <h1>Kronos</h1>
        <AnyNameStartWithCapitale />
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
