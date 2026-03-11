import './App.css';
import React,{useState} from 'react';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';


function App() {

  const [todos, setTodos]= useState([]);

  const addtodos = (value)=>{
    setTodos([...todos,value])
    console.log(todos)
  }

 

  return (
    <div className="App">
      <TodoInput addtodo={addtodos}/>
      <div>
        <ul>
          {
            todos.map((el)=><TodoItem value={el}/> )
          }
        </ul>

      </div>
     
    </div>
  );
}

export default App;


