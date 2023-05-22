import { Todo } from "../Model.tsx";
import SingleTodo from "./SingleTodo.tsx";
interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    
    return (
        <div className="todo_container">
          {todos.map((todo)=> <SingleTodo id_={todo.id} todo={todo} todos={todos} setTodos={setTodos} />)}
           
          
        </div>
    )
}
export default TodoList;