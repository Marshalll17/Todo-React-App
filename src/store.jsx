import { createStore } from 'redux'

// Initial state
const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
}

// Reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTasks = [...state.tasks, action.payload]
      localStorage.setItem('tasks', JSON.stringify(newTasks))
      return { ...state, tasks: newTasks }
    case 'DELETE_TASK':
      const updatedTasks = state.tasks.filter(
        (task, index) => index !== action.payload
      )
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
      return { ...state, tasks: updatedTasks }
    default:
      return state
  }
}

const store = createStore(todoReducer)

export default store
