import CardContent from "@mui/material/CardContent";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import IconButton from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CheckIcon from "@mui/icons-material/Check";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import {useContext, useState} from "react";
import {TodosContext} from "../contexts/TodosContext";

function Todo({todo, handelCheck}) {
  const {todos, setTodos} = useContext(TodosContext);
  function handleCheckClick() {
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(updatedTodos);
    window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({
    title: todo.title,
    details: todo.details,
  });

  function handleDeleteClick() {
    setShowDeleteDialog(true);
  }
  function handleDeleteDialogClose() {
    setShowDeleteDialog(false);
  }

  function handleDeleteconfirm() {
    const updatedTodos = todos.filter((t) => {
      // if (t.id === todo.id) {
      //   return false;
      // } else {
      //   return true;
      // }
      return t.id != todo.id;
    });
    setTodos(updatedTodos);
    window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }
  function handleUpdateDialogClose() {
    setShowUpdateDialog(false);
  }
  function handleUpdateClick() {
    setShowUpdateDialog(true);
  }
  function handleUpdateconfirm() {
    const updatedTodos = todos.map((t) => {
      if (t.id == todo.id) {
        return {...t, title: updatedTodo.title, details: updatedTodo.details};
      } else {
        return t;
      }
    });
    setTodos(updatedTodos);
    setShowUpdateDialog(false);
    window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  return (
    <>
      {/* Delete Modal */}
      <Dialog
        onClose={handleDeleteDialogClose}
        open={showDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are Sure You Want To Delete The Task ?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            you Cannot Go Back After Deleted The Task
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>Close</Button>
          <Button autoFocus onClick={handleDeleteconfirm}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      {/* === Delete Modal === */}
      {/* Update Modal */}
      <Dialog
        onClose={handleUpdateDialogClose}
        open={showUpdateDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Update The Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={updatedTodo.title}
            margin="dense"
            id="name"
            label="Task Title"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setUpdatedTodo({...updatedTodo, title: e.target.value});
            }}
          />
          <TextField
            autoFocus
            value={updatedTodo.details}
            margin="dense"
            id="name"
            label="Task Details"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setUpdatedTodo({...updatedTodo, details: e.target.value});
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateDialogClose}>Close</Button>
          <Button autoFocus onClick={handleUpdateconfirm}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
      {/* === Update Modal === */}
      <Card
        className="todoCard"
        sx={{
          minWidth: 275,
          background: "#283593",
          color: "#fff",
          marginBottom: "30px",
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={8}>
              <Typography
                variant={"h5"}
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "",
                }}
                sx={{textAlign: "left"}}
              >
                {todo.title}
              </Typography>
              <Typography variant={"h6"} sx={{textAlign: "left"}}>
                {todo.details}
              </Typography>
            </Grid>
            <Grid
              xs={4}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <IconButton
                className={"iconButtons"}
                aria-label="delete"
                sx={{
                  color: todo.isCompleted ? "#fff" : "#8bc34a",
                  backgroundColor: todo.isCompleted ? "#8bc34a" : "#fff",
                  border: ` 3px solid  ${
                    todo.isCompleted ? "#fff" : "#8bc34a"
                  } `,
                }}
                onClick={handleCheckClick}
              >
                <CheckIcon />
              </IconButton>
              <IconButton
                onClick={handleUpdateClick}
                className={"iconButtons"}
                aria-label="delete"
                sx={{
                  color: "#1769aa",
                  backgroundColor: "#fff",
                  border: " 3px solid  #1769aa ",
                }}
              >
                <ModeEditOutlineOutlinedIcon />
              </IconButton>
              <IconButton
                onClick={handleDeleteClick}
                className={"iconButtons"}
                aria-label="delete"
                sx={{
                  color: "#b23c17",
                  backgroundColor: "#fff",
                  border: " 3px solid  #b23c17 ",
                }}
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default Todo;
