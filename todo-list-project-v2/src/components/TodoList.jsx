import {useState,useContext} from "react"
import { TodosContext } from "../contexts/todosContext";
import * as React from 'react';
import Container from '@mui/material/Container';
 
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import {v4 as uuidv4} from "uuid"

import Todo from './Todo';
import { useEffect } from "react";



export default function TodoList() {
  const {todos,setTodos} = useContext(TodosContext)
  // console.log(value.todos)
  const [titleInput,setTitleInput] = useState('');
  
  const [displayedTodosType,setDisplayedTodosType] = useState('all')

  useEffect(()=>{
    const storageTodos = JSON.parse(localStorage.getItem('todosV2'));
    setTodos(storageTodos);
  }, [])



  function handleAddClick() {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "details",
      isCompleted: false,
    }

    const updatedTodos = [...todos,newTodo]
    setTodos(updatedTodos);
    localStorage.setItem("todosV2",JSON.stringify(updatedTodos));
    setTitleInput('')
  }

  function changeDisplayedType(e){
    console.log('test')
    console.log(e.target.value)
    setDisplayedTodosType(e.target.value)

  }

    // Filterations arrays
    const completedArray = todos.filter((t)=>{
      return t.isCompleted
    })
    
    const notCompletedArray = todos.filter((t)=>{
      return !t.isCompleted
    })
    let todosToBeRendered = todos 
    if(displayedTodosType === "completed") {
      todosToBeRendered = completedArray
    }else if(displayedTodosType === "non-completed") {
      todosToBeRendered = notCompletedArray
    }else {
      todosToBeRendered = todos
    }
  const todosJSx = todosToBeRendered.map((t)=>{
    return <Todo key={t.id} todo={t}  />
  })
  return (
    
      <Container maxWidth="sm">
        <Card sx={{ minWidth: 275 ,textAlign:"center"}} style={{maxHeight:"80vh",overflow:"auto"}}>
          <CardContent>
            <Typography style={{fontWeight:"bold"}} variant='h2'  >
              My Tasks
            </Typography>
            <Divider/>

            {/* FILTER BUTTONS */}
            <ToggleButtonGroup
          value={displayedTodosType}
          exclusive
          onChange={changeDisplayedType}
          aria-label="text alignment"
          style={{marginTop:"30px"}}
        >
          <ToggleButton value="all" aria-label="left aligned">
            All
          </ToggleButton>
          <ToggleButton value="completed" aria-label="centered">
            Completed
          </ToggleButton>
          <ToggleButton value="non-completed" aria-label="right aligned">
            Not Completed
          </ToggleButton>
        </ToggleButtonGroup>
            {/* // FILTER BUTTONS // */}

            {/* ALL TODOS */}
            {todosJSx}
            {/* // ALL TODOS // */}

            {/* INPUT + ADD BTN */}
            <Grid container style={{marginTop:"20px"}} spacing={2}>
                    <Grid xs={8}  >
                      <TextField value={titleInput} onChange={(e)=>{setTitleInput(e.target.value)}} style={{width:"100%"}} id="outlined-basic" label="Task Title" variant="outlined" />
                    </Grid>
                    <Grid xs={4}  >
                      <Button onClick={()=>{
                        handleAddClick()
                      }} variant="contained" style={{width:"100%",height:"100%"}}>Add</Button>
                    </Grid>
            </Grid>
            {/* // INPUT + ADD BTN // */}

          </CardContent>
        
        </Card>
 
      </Container>
    
  );
}