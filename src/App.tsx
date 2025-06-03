import react,{ useState } from 'react'
import './App.css'

//Components
import Todo from './Components/Todo'

const App:React.FC=():React.ReactNode=>{

  const [input,setInput]=useState<string>("")
  const [Todos,setTodos]=useState<{todoName:string,id:string}[]>([])

  const addTodo=()=>{
    if(Todos){
      if(Todos.length>0){
        setTodos([...Todos,{todoName:input,id:crypto.randomUUID()}])
      }else{
        setTodos([{todoName:input,id:crypto.randomUUID()}])
      }
    }
    console.log(Todos)
  }

  const removeTodo=(id:string)=>{
    setTodos(Todos=>{
      return Todos.filter(Todo=>{return Todo.id!=id})
    })
    console.log(Todos)
  }

  return (
    <>
      <div id="input-container">
        <input id="Todo-input" type="text" value={input} onChange={(event:react.ChangeEvent<HTMLInputElement>)=>{setInput(event.target.value)}}/>
        <button id='Todo-submit' onClick={addTodo}>click</button>
      </div>
      <div id='show-todos'>
        {Todos.map((todo)=>(
            <Todo todoName={todo.todoName} id={todo.id} deleteTodo={removeTodo}/>
        ))}
      </div>
    </>
  )
}

export default App
