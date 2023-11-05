import {v4 as uuid4} from "uuid";
import Todo from "./Todo";
import Container from "@mui/material/Container";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import {useState, useContext, useEffect} from "react";
import {TodosContext} from "../contexts/TodosContext";

function TodoList() {
  const {todos, setTodos} = useContext(TodosContext);
  const [titleInput, setTitleInput] = useState("");
  const [displayedTodosType, setDisplayedTodosType] = useState("all");

  useEffect(() => {
    console.log("calling useEffect");
    const storageTodos = JSON.parse(window.localStorage.getItem("todos")) ?? [];
    setTodos(storageTodos);
  }, []);

  function handleAddClick() {
    const newTodo = {
      id: uuid4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTitleInput("");
  }
  function changeDisplayedTodosType(e) {
    console.log(e.target.value);
    setDisplayedTodosType(e.target.value);
  }

  // filteration arrays
  const completedTodos = todos.filter((t) => t.isCompleted);

  const notCompletedTodos = todos.filter((t) => !t.isCompleted);

  let todosToBeRendered = todos;

  if (displayedTodosType == "completed") {
    todosToBeRendered = completedTodos;
  } else if (displayedTodosType == "non-completed") {
    todosToBeRendered = notCompletedTodos;
  }
  const todosJsx = todosToBeRendered.map((t) => {
    return <Todo todo={t} key={t.id} />;
  });

  return (
    <Container maxWidth="sm" className="shesh">
      <Card
        sx={{
          minWidth: 275,
          textAlign: "center",
          maxHeight: "80vh",
          overflow: "auto",
        }}
      >
        <CardContent>
          <Typography variant={"h2"} sx={{fontWeight: "bold"}}>
            My Tasks
            <Divider />
            {/* Filter Buttons  */}
            <ToggleButtonGroup
              value={displayedTodosType}
              exclusive
              onChange={changeDisplayedTodosType}
              aria-label="text alignment"
              style={{marginTop: "30px", marginBottom: "30px"}}
              color="primary"
            >
              <ToggleButton value="all">All</ToggleButton>
              <ToggleButton value="completed">Completed</ToggleButton>
              <ToggleButton value="non-completed">Not Completed</ToggleButton>
            </ToggleButtonGroup>
            {/* === Filter Buttons === */}
          </Typography>

          {/* All Todos */}
          {/* <Todo /> */}
          {todosJsx}
          {/* === All Todos === */}

          {/* Input + Add Button */}
          <Grid alignItems={"center"} container spacing={2}>
            <Grid xs={8}>
              <TextField
                value={titleInput}
                onChange={(e) => {
                  setTitleInput(e.target.value);
                }}
                fullWidth
                id="standard-basic"
                label="Task Title"
                variant="outlined"
              />
            </Grid>
            <Grid xs={4}>
              <Button
                variant="contained"
                style={{width: "100%", height: "100%"}}
                onClick={() => {
                  handleAddClick();
                }}
                disabled={titleInput.length <= 0}
              >
                Add Task
              </Button>
            </Grid>
          </Grid>
          {/* === Input + Add Button === */}
        </CardContent>
      </Card>
    </Container>
  );
}

export default TodoList;
