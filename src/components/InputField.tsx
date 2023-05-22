interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    AddTodo:(e: React.FormEvent)=> void;
}

const InputField:React.FC<Props>=({todo,setTodo,AddTodo})=>{
return(
    <div className="input_button"><input className="input-field" placeholder="Enter Task" value={todo} onChange={(e)=>setTodo(e.target.value)}/> <button onClick={AddTodo}>Go</button></div>
)
}
export default InputField