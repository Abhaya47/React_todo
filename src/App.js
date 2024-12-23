import './App.css';
import { useState } from 'react';

let nextId=1;
  function App() {

  const [todo,setTodo]= useState('');
  const [list,setList]=useState(
    [

    ]);

    function Delete(e){
      e.preventDefault();
      let tmp=list.filter((task)=>{return task.id != e.target.value })
      setList(tmp);
    };

    function Done(e){
      e.preventDefault();
      let id=e.target.value;
      let altered=list.map(item=>{
        if(item.id==e.target.value){
          item.completed = !item.completed;
        }
        return item;
      })
      setList(altered);
    }

  return (
    <div className="App">
      <h1>TODO</h1>
        <div className='Input'>
          <label name="todo">Enter a todo item</label>
          <input type='text' id="todo" value={todo} onChange={e=>setTodo(e.target.value)}></input>
          <button onClick={()=>{setList([...list,{id:nextId++, name:todo, completed:false}]);setTodo('');}}>Add</button>
        </div>
      <ul>
        {list.map(list=>(
          <li key={list.id} className='todo'>
            {list.completed?<h2><s>{list.name}</s></h2>:<h2>{list.name}</h2>}
            
            <button onClick={Delete} value={list.id}>Delete</button>
            <button onClick={Done} value={list.id}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
