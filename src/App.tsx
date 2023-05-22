
import InputField from "./components/InputField.tsx"
import TodoList  from "./components/TodoList.tsx"
import {useState } from "react"
import {Todo } from "./Model.tsx";
const App:React.FC =() =>{
  const [todo,setTodo]= useState<string>(" ");
  const [todos,setTodos] =useState<Todo[]>([])
  const AddTodo =(e: React.FormEvent)=>{
   e.preventDefault();
   if(todo){
    setTodos([...todos, {id:Date.now(),todo,isDone:false,isEditMode:false}])
    setTodo("")
   }
  }
  return (
   <div className="main-container">
    <h1>Taski</h1>
    <div className="task_center">
    <InputField todo={todo} setTodo={setTodo} AddTodo={AddTodo}/>
    <TodoList todos={todos} setTodos={setTodos}/>
    </div>
   </div>
  )
}

export default App
