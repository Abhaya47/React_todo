import './App.css';
import Input from './Input';
import { useEffect, useState } from 'react';

let nextId=1;
  function App() {

  const [todo,setTodo]= useState();
  const [list,setList]=useState(
    [
      {id:0,name:"eat"},
      {id:1,name:"sleep"}
    ]);

    function Delete(e){
      e.preventDefault();
      console.log(e.target.value);
      setList(list.filter());
    }

    function Done(e){
      e.preventDefault();
    }

  return (
    <div className="App">
      <h1>TODO</h1>
        <div className='Input'>
          <label name="todo">Enter a todo item</label>
          <input type='text' id="todo" value={todo} onChange={e=>setTodo(e.target.value)}></input>
          <button onClick={()=>{setList([...list,{id:nextId++, name:todo}]);}}>Add</button>
        </div>
      
      <ul>
        {list.map(list=>(
          <li key={list.id} className='todo'>
            <h2>{list.name}</h2>
            <button onClick={()=>{ setList(list.filter(item => item.id !== list.id)); } } value={list.id}>Delete</button>
            <button onClick={Done}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
