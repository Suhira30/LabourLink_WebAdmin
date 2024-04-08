import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Container from '@mui/material/Container';
import axios from 'axios';

const api = "http://localhost:1000/";

const Todo = () => {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdited, setIsEdited] = useState(false);
  const [editedId, setEditedId] = useState(null);

  const inputStyle = {
    width: "70%",
    marginBottom: 30,
    marginRight: 10
  };

  const addButtonStyle = {
    height: 55,
    marginBottom: 30,
    marginLeft: 10,
  };

  const containerStyle = {
     alignItems: "center",
  };
const containerStyle1={
  display: "flex",
    alignItems: "center",
    marginTop: 0,
}
  const listStyle = {
    width: "80%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-around",
    border: "1px solid light-gray"
  };

  const textStyle = {
    width: "70%"
  };

  const listButtonStyle = {
    marginLeft: 10
  };

  const onChange = (e) => {
    setInputVal(e.target.value);
  };
//Add task-------------------------------------------
const handleClick = async() => {
  if (!isEdited) {
    setTodos([
      ...todos,
      { title: inputVal, isDone: false, id: new Date().getTime() }
    ]);
  } else {
    setTodos([...todos, { title: inputVal, isDone: false, id: editedId }]);
  }
  setInputVal("");
  setIsEdited(false);

  const todo={title:inputVal}
 try {
    const { data } = await axios.post(`${api}`,todo); 
   setTodos([...todos,data])
   console.log(data)
  } catch (error) {
    console.error("Error:", error); 
  }
};
//Delete task-----------------------------------------
const onDelete = async (id) => {
  const newTodos = todos.filter((todo) => todo.id !== id);
  setTodos(newTodos);

  try {
     await axios.delete(`${api}${id}`); 
   setTodos(todos.filter(todo=>todo.id!==id))
   console.log("Task deleted successfully!")
  } catch (error) {
    console.error("Error:", error); 
  }
};

  const handleDone = (id) => {
    const updated = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(updated);
  };

  return (
    <Container component="main" style={containerStyle}>
     <Container component ="submain" style={containerStyle1}>
      <TextField
        variant="outlined"
        onChange={onChange}
        label="type your task"
        value={inputVal}
        style={inputStyle}
      />
      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={handleClick}
        style={addButtonStyle}
        disabled={inputVal ? false : true}
      >
        Add Task
      </Button></Container>
      <List>
        {todos.map((todo) => {
          return (
            <ListItem key={todo.id} style={listStyle}>
              <Checkbox
                onClick={() => handleDone(todo.id)}
                checked={todo.isDone}
              />
              <Typography
                style={{ ...textStyle, color: todo.isDone ? "green" : "" }}
              >
                {todo.title}
              </Typography>
              <Button
                onClick={() => onDelete(todo.id)}
                color="secondary"
                variant="contained"
                style={listButtonStyle}
              >
                Delete
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default Todo;
