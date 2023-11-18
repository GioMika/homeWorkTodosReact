import TodoItem from "./TodoItem";


function TodoList({todos,id,RemoveTodo}){
console.log(todos);
  return (
    <ul>
{todos.map((todo) => (
 <TodoItem RemoveTodo={RemoveTodo} key={Math.random()} {...todo}/>
 ))}
    </ul>
  )
}

export default TodoList;