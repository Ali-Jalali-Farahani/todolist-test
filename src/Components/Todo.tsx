import React from 'react'
import './Todo.css'

function todo({todoName, id , deleteTodo}: { todoName: string; id: string;deleteTodo:Function }) {
  return (
    <div id='todo-container'>
        <div id='todo-name'>
            {todoName}
        </div>
        <button id='todo-delete' onClick={()=>deleteTodo(id)}>Delete</button>
    </div>
  )
}

export default todo