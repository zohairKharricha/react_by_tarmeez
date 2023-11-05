import "./App.css";
import TodoList from "./components/TodoList";
import {createTheme, ThemeProvider} from "@mui/material";
import {TodosContext} from "./contexts/TodosContext";
import {useState} from "react";
import {v4 as uuid4} from "uuid";

const initialTodos = [
  {
    id: uuid4(),
    title: "Task 1",
    details: "details of task 1",
    isCompleted: false,
  },
  {
    id: uuid4(),
    title: "Task 2",
    details: "details of task 2",
    isCompleted: false,
  },
  {
    id: uuid4(),
    title: "Task 3",
    details: "details of task 3",
    isCompleted: false,
  },
];

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Alexandria"],
    },
    palette: {
      primary: {main: "#004d40"},
    },
  });

  const [todos, setTodos] = useState(initialTodos);

  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#191b1f",
        }}
      >
        <TodosContext.Provider value={{todos: todos, setTodos: setTodos}}>
          <TodoList />
        </TodosContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
