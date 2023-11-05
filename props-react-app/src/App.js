import logo from "./logo.svg";
import "./App.css";
import Article from "./Article";

function App() {
  const firstArticle = `Article One`;
  const secondArticle = `Article Two`;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Article
          content={firstArticle}
          personName="Zohair"
          email="kharrichazohair@gmail.com"
          birthday="2005"
        >
          <h1>Hello World!</h1>
        </Article>
        <Article
          content={secondArticle}
          personName="Kronos"
          email="kronos@gmail.com"
          birthday="2020"
        >
          <div style={{backgroundColor: "teal"}}>
            <h2>Hello World!</h2>
            <p style={{backgroundColor: "orange"}}>ufhudh </p>
          </div>
        </Article>

        <Article personName="eros" email="eros@gmail.com" birthday="2010">
          <h4>This Is The Content</h4>
        </Article>
      </header>
    </div>
  );
}

export default App;
