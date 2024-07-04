import React, { useState ,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Container from '@mui/material/Container';
import toDoService from '../Pages/Service/toDoService';

const Todo = () => {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  const inputStyle = {
    width: "70%",
    marginBottom: 30,
    marginRight: 10
  };

  const addButtonStyle = {
    height: 55,
    marginBottom: 30,
    marginLeft: 0,
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
  // Fetch todos when the component mounts
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todos = await toDoService.fetchAll();
        setTodos(todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);
//add todo
  const handleClick = async () => {
    if (inputVal.trim() === "") return;
    const todo = { title: inputVal };

    try {
      const newTodo = await toDoService.addToDo(todo);
      setTodos([...todos, newTodo]);
      setInputVal("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };
// Delete task
const onDelete = async (id) => {
  try {
    await toDoService.deleteToDo(id);
    setTodos(todos.filter(todo => todo.id !== id));
    console.log("Task deleted successfully!");
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};
  // Toggle task done state
  const handleDone = async (id) => {
    try {
      const updatedIsDone = await toDoService.handleToDo(id);
      setTodos(todos.map(todo => {
        if (todo.id === id) {
          todo.isDone = updatedIsDone;
        }
        return todo;
      }));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
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
        color="secondary"
        onClick={handleClick}
        style={addButtonStyle}
        disabled={inputVal ? false : true}
      >
        Add 
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
                Remove
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default Todo;
