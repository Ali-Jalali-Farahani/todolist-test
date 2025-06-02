import react,{ useState } from 'react'
 
import './App.css'

const App:React.FC=():React.ReactNode=>{

  const [input,setInput]=useState<string>("")
  const [todos,setTodos]=useState<{todoName:string,id:string}[]>([])

  const addTodo=()=>{
    if(todos){
      if(todos.length>0){
        setTodos([...todos,{todoName:input,id:crypto.randomUUID()}])
      }else{
        setTodos([{todoName:input,id:crypto.randomUUID()}])
      }
    }
    console.log(todos)
  }

  return (
    <>
      <div id="input-container">
        <input id="todo-input" type="text" value={input} onChange={(event:react.ChangeEvent<HTMLInputElement>)=>{setInput(event.target.value)}}/>
        <button id='todo-submit' onClick={addTodo}>click</button>
      </div>
      <div id='show-todos'>
        {todos.map((todo)=>(
          <div>
            {todo.todoName}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
