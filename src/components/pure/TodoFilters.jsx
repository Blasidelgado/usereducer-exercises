import React, {useContext} from 'react'
import { myContext, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, FILTER_TODOS } from '../container/TodosContainer'

const TodoFilters = () => {

    const {filters, dispatch} = useContext(myContext)

    return (
    <nav>
        <button onClick={() => dispatch({type: FILTER_TODOS, payload: SHOW_ALL})}>SHOW ALL</button>
        <button onClick={() => dispatch({type: FILTER_TODOS, payload: SHOW_ACTIVE})}>SHOW ACTIVE</button>
        <button onClick={() => dispatch({type: FILTER_TODOS, payload: SHOW_COMPLETED})}>SHOW COMPLETED</button>
    </nav>
    )
}

export default TodoFilters