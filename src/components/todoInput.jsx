import React,{useState} from "react";

const TodoInput = ({addtodo})=>{
    const [todo,setTodo]= useState()
    const add = ()=>{
        addtodo(todo)

    }
    

    return <>
        <input type="text" onChange={(e)=>{ setTodo(e.target.value)}} value={todo} />
        <button onClick={()=>{add(todo)}}>add</button>
    
    </>
}

export default TodoInput