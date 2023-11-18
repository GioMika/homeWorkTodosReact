import {useEffect, useState} from "react";
import TodoList from "./components/TodolList";


function App() {

  const [title, setTitle] = useState('')
  const [todos,setTodos] = useState([])

 useEffect(() => {
  const newTodos = localStorage.getItem('keytodos')
  newTodos&& setTodos(JSON.parse(newTodos))
 },[])

function handleChange(event){
  setTitle(event.target.value)
}


function AddTodo(){
  if(title){
    setTodos([
      ...todos,
      {
        id:Math.floor( Math.random() * 999),
        title,
      }
    ])
  }
  setTitle('')
}

function RemoveTodo(id){
setTodos(todos.filter((elem)  => elem.id !== id))
}


useEffect(() => {
  localStorage.setItem('keytodos',JSON.stringify(todos))
},[todos])



  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input value={title} type="text" 
         onChange={(event)=>handleChange(event)}/>
        <button onClick={AddTodo}>AddTodo</button>
        <h2> title : {title}</h2>
      </div>
      <TodoList todos={todos} RemoveTodo={RemoveTodo}/>
    </div>
  )
}

export default App;
