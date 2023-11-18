
function TodoItem({title,id,RemoveTodo}){

  return (
    <li>
      <label>
       {id} {title}
       <span onClick={() => RemoveTodo(id)}>X</span>
      </label>
    </li>
  )
}

export default TodoItem;