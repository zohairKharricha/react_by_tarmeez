import logo from "./logo.svg";
import "./App.css";
import Material from "./Material.js";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {orange} from "@mui/material/colors";
import {purple, grey, green} from "@mui/material/colors";
import GridTest from "./GridTest";
import StackTest from "./StackTest";

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: grey[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Material />
        {/* <GridTest /> */}
        {/* <StackTest /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
