import React from "react";

const TodoItem = ({value})=>{
    return <>{
            value != "a"? <li>{value}</li>: <li></li>
    }
    </>
}

export default TodoItem