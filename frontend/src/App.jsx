import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import axios from "axios"

function App() {
  const [todos, setTodos] = useState([]);

  async function getAllTodos() {
    try {
      const todoFetched = await axios.get("http://localhost:3000/todos");
      setTodos(todoFetched.data);
    } catch(e) {
      console.log(e);
    }
  }

  async function createTheTodo(title, description) {
    try {
      await axios.post("http://localhost:3000/createTodo", {
        title: title,
        description: description
      })
      alert("todo created");
      getAllTodos();
    } catch(e) {
      console.log(e);
    }
  }
  async function markCompleted(id)  {
    try {
      await axios.put("http://localhost:3000/mark", {
        _id: id
      });
      getAllTodos();
    } catch(e) {
      console.log(e);
    }
  }
  async function deleteTodo(id) {
    console.log("delete route reached");
    try {
      await axios.delete("http://localhost:3000/delete", {
        _id: id
      }); 
      console.log("hiiiiiiii")
      getAllTodos();
    } catch(e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getAllTodos();
  }, []);
  return (
    <>
      <CreateTodo createTheTodo={createTheTodo}/>
      <Todos todos={todos} markCompleted={markCompleted} deleteTodo={deleteTodo}/>  
    </>
  )
}

export default App