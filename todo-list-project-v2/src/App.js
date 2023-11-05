import "./App.css";
import {useState} from "react";
import TodoList from "./components/TodoList";
import {createTheme, ThemeProvider} from "@mui/material/styles";

import {v4 as uuidv4} from "uuid";

import {TodosContext} from "./contexts/todosContext";
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"],
  },
});

const initialTodos = [
  {
    id: uuidv4(),
    title: "Read a Book",
    details: "description 1",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Read The Second Book",
    details: "description 2",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "playing ",
    details: "description 3",
    isCompleted: false,
  },
];
function App() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#191b1f",
          height: "100vh",
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
