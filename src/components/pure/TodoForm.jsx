import React, {useRef, useContext, useReducer} from 'react'
import { myContext } from '../container/TodosContainer'


const TodoForm = () => {
    
    const dispatch = useContext(myContext)
    
    const textRef = useRef('')
    
    function handleSubmit(e) {
        e.preventDefault()
        dispatch({
            type: 'ADD_TODO',
            payload: textRef.current.value
        })
        textRef.current.value = ''
    }

  return (
    <form onSubmit={handleSubmit}>
    <input
    type='text'
    ref={textRef}
    placeholder='Enter your new todo text'
    />
    <button type='submit'>Add todo</button>
</form>
    )
}
export default TodoForm