import React, {useContext} from 'react'
import { myContext, TOGGLE_TODO, REMOVE_TODO } from '../container/TodosContainer'

const TodoList = () => {

    const {todos, filters, dispatch} = useContext(myContext)

    const filterTodos = (todos, filter) => {

      switch (filter) {
          case 'SHOW_ALL':
              return todos;
          case 'SHOW_ACTIVE':
              return todos.filter((todo) => !todo.completed);
              case 'SHOW_COMPLETED':
                  return todos.filter((todo) => todo.completed);
                  default:
              return todos;
      }
  }

  const filteredTodos = filterTodos(todos, filters)

  return (
    <ul>
        {filteredTodos.map((todo, index) => (
        <li 
        key={index} 
        style={{display: 'flex', gap: '20px'}}
        >
            <div>{todo.id}</div>
            <div>{todo.text}</div>
            <div
            onClick= {() => dispatch({type: TOGGLE_TODO, payload: todo.id})} >
            {todo.completed ? 'Completed' : 'Active' }
            </div>
            <button onClick={() => dispatch({type: REMOVE_TODO, payload: todo.id})}>Remove</button>
        </li>
        ))}
    </ul>
  )
}

export default TodoList