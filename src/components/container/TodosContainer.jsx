import React, {useReducer, useContext, useRef} from 'react'
import TodoFilters from '../pure/TodoFilters'
import TodoForm from '../pure/TodoForm'
import TodoList from '../pure/TodoList'

// Filters:
export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'

//Actions 
const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const FILTER_TODOS = 'FILTER_TODOS'

//Initial State
const initialState = {
    todos: [{id: 0, text: 'Learn React', completed: true}],
    filters: SHOW_COMPLETED
}

//Calculate next ID
function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1)
    return maxId + 1
}

//Reducers
function todosReducer(state, action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false,
                    deleted: false
                }
            ]
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.payload);
        case TOGGLE_TODO:
            return state.map((todo) => 
            (todo.id === action.payload) ?
            {
                ...todo,
                completed: !todo.completed
            }
            :   todo
        )
        default:
            return state
    }
}

function filterReducer(state,action) {
    switch (action.type) {
        case FILTER_TODOS: 
        return action.payload
        
        default:
            return state;
    }
}

//Create Context
export const myContext = React.createContext(null)


const TodosContainer = () => {

    const [todos, todosDispatch] = useReducer(todosReducer, initialState.todos )
    const [filters, filtersDispatch] = useReducer(filterReducer, initialState.filters)
        
    return (
        <div>
        <myContext.Provider value={todosDispatch}>
            <TodoForm />
        </myContext.Provider>
        <myContext.Provider value={{todos: todos, filters: filters, dispatch: todosDispatch}} >
            <TodoList />
        </myContext.Provider>
        <myContext.Provider value={{filters: filters, dispatch: filtersDispatch}} >
            <TodoFilters />
        </myContext.Provider>
        </div>
    )
}

export default TodosContainer