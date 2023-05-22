import React, { useEffect, useRef, useState } from 'react'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { Todo } from "../Model.tsx";
interface Props {
    id_: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ id_, todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus() //There or not there ?
    }, [edit])
    const handleDelete = (id: number) => {
        setTodos(todos.filter((item) => item.id !== id))
    }
    const handleDone = (id: number) => {
        setTodos(todos.map((item) => item.id === id ? { ...item, isDone: !item.isDone } : item))
    }

    const handleEditDone = (id: number, e: React.FormEvent) => {
        console.log(edit)
        e.preventDefault();
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, todo: editText } : todo))
        );
        setEdit(false)

    }
    return (
        <div className="single-todo">
            {edit ? <input ref={inputRef} value={editText} onChange={(e) => setEditText(e.target.value)} /> : <div className="text">{todo.isDone ? <s>{todo.todo}</s> : <span>{todo.todo}</span>} </div>}
            <div className="icons">
                <span >
                    {edit ?
                        <button onClick={(e) => handleEditDone(todo.id, e)}>
                            ok
                        </button> : <span onClick={() => setEdit(true)}><AiFillEdit /></span>}
                </span>
                <span onClick={() => handleDelete(id_)}><AiFillDelete />
                </span>
                <span onClick={() => handleDone(id_)}><MdOutlineDone /></span></div>
        </div>
    )
}

export default SingleTodo