// import "../App.css"
import { useContext, useState } from 'react';
import { TodosContext } from '../contexts/todosContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import CheckIcon from '@mui/icons-material/Check';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

import IconButton from '@mui/material/IconButton';

function Todo({todo}) {
    const [showDeleteDialogue,setShowDeleteDialogue] = useState(false);
    const [showUpdateDialog,setShowUpdateDialog] = useState(false);
    const [updatedTodo,setUpdatedTodo] = useState({
      title:todo.title,
      details:todo.details,
    });
    const {todos,setTodos} = useContext(TodosContext)
    function handleCheckClick(){
        const updatedTodos = todos.map(t=>{
            if(t.id === todo.id) {
              t.isCompleted = !t.isCompleted;
            }
            return t
          })
          setTodos(updatedTodos)
          localStorage.setItem("todosV2",JSON.stringify(updatedTodos));
         
    }

 
     function handleDeleteClick() {
        setShowDeleteDialogue(true);
     }
     function handleDeleteDialogClose(){
        setShowDeleteDialogue(false);
     }
     function handleDeleteConfirm(){
        const updatedTodos = todos.filter((t)=>{
            // return t.id === todo.id ? false : true
            return t.id !== todo.id
        })

        setTodos(updatedTodos)
        localStorage.setItem("todosV2",JSON.stringify(updatedTodos));
         
     }

     function handleUpdateClick(){
      setShowUpdateDialog(true);
     }
     function handleUpdateDialogClose(){
      setShowUpdateDialog(false)
     }
     function handleUpdateConfirm(){
      const updatedTodos = todos.map((t)=>{
        return t.id === todo.id ? {...t,title:updatedTodo.title,details:updatedTodo.details} : t
      })
      setTodos(updatedTodos)
      localStorage.setItem("todosV2",JSON.stringify(updatedTodos)); 
      setShowUpdateDialog(false)
     }
  return (
    <>
    {/* DELETE DIALOG */}
    <Dialog
    onClose={handleDeleteDialogClose}
        open={showDeleteDialogue}
         
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            are you sure you want to delete this task?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            you cannot go back after deleting this task
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>No</Button>
          <Button onClick={handleDeleteConfirm}   autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    {/* // DELETE DIALOG // */}
    {/* UPDATE DIALOG */}
    <Dialog
    onClose={handleUpdateDialogClose}
        open={showUpdateDialog}
         
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            are you sure you want to delete this task?
        </DialogTitle>
        <DialogContent>
          <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Task Title"
              type="email"
              fullWidth
              variant="standard"
              value={updatedTodo.title}
              onChange={(e)=>{setUpdatedTodo({...updatedTodo,title: e.target.value})}}
            />
          <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Details"
              type="email"
              fullWidth
              variant="standard"
              value={updatedTodo.details}
              onChange={(e)=>{setUpdatedTodo({...updatedTodo,details: e.target.value})}}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateDialogClose}>No</Button>
          <Button onClick={handleUpdateConfirm}  autoFocus>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    {/* // UPDATE DIALOG // */}
        <Card className='todoCard' sx={{ minWidth: 275 ,textAlign:"center",background:"#283593",color:"#fff",marginTop:5}}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid xs={8}>
                        <Typography variant='h5' style={{textAlign:"left"}}>
                            {todo.title}
                        </Typography>
                        <Typography variant='h5' style={{textAlign:"left"}}>
                            {todo.details}
                        </Typography>
                    </Grid>
                    <Grid xs={4} display="flex" justifyContent="space-around" alignItems="center" >
                    {/* CHECK ICON BUTTON */}
                    <IconButton onClick={()=>{handleCheckClick()}} className='iconButton' style={{color:todo.isCompleted ? "#fff":"#8bc34a",background:todo.isCompleted ? "#8bc34a": "#fff",border:"3px solid ",borderColor:todo.isCompleted ? "#fff":"#8bc34a"}} aria-label="delete">
                        <CheckIcon />
                    </IconButton>
                    {/* // CHECK ICON BUTTON // */}
                    {/* UPDATE ICON BUTTON */}
                    <IconButton onClick={handleUpdateClick} className='iconButton' style={{color:"#1769aa",background:"#fff",border:"3px solid #1769aa"}} aria-label="delete">
                        <ModeEditOutlineOutlinedIcon />
                    </IconButton>
                    {/* // UPDATE ICON BUTTON // */}
                    {/* DELETE BUTTON */}
                    <IconButton onClick={handleDeleteClick} className='iconButton' style={{color:"#b23c17",background:"#fff",border:"3px solid #b23c17"}} aria-label="delete">
                        <DeleteOutlinedIcon />
                    </IconButton>
                    {/* // DELETE BUTTON // */}
                    </Grid>
                </Grid>
                
             </CardContent>
        </Card>
    </>
  )
}

export default Todo