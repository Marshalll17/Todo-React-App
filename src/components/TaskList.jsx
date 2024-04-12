import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

  const handleDeleteTask = (index) => {
    dispatch({ type: 'DELETE_TASK', payload: index })
  }

  return (
    <div className='task-list'>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className='task-item'>
            {task}
            <button
              className='delete-btn'
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
