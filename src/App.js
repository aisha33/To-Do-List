import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import data from './data';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import logo192  from './logo192.png'; 



function App() {

var days = [' It is Sunday 😜', ' It is Monday 💪😀', 'It is Tuesday 😜', 'It is Wednesday 😌☕️', ' It is Thursday 🤗', 'It is Friday 😴', 'It is Saturday 😴'];
var dayName = days[new Date().getDay()];


  const [todoList,setTodoList]= useState(data)
  const handeleToggle = (id)=>{
    let mapped = todoList.map(task =>{
      return task.id === Number(id) ? {...task, complete: !task.complete} : {...task}
    })
   setTodoList(mapped)
  }
  const handeleFilter = (id) =>{
    let filtered = todoList.filter(todo =>{
      return todo.id !== id;
    })
    setTodoList(filtered)
  }
  const addtask = (userInput) =>{
    let copy = [...todoList];
    copy.push({id: todoList.length + 1, task: userInput, complete: false });
    setTodoList(copy);
  }

   const handeleRemoveAll = () =>{
     if(addtask){
    let filtered = todoList.filter(task =>{
      return !task.complete;
    
    })
    setTodoList(filtered)

        
  }
else{
  console.log("No tasks")
 
}}
  
  
 

  useEffect(() => {
  // storing input name
  localStorage.setItem("todoList", JSON.stringify(todoList));
}, [todoList]);

  return (
    
    <div>
       
        <div className="container">
           <div className="row">
            
            <div className="col-md-6 col-md-offset-3 col-xs-6 col-xs-offset-3">
             
          <div className="today">
               <h1>To Do List ✍️ </h1>
            <h4>{dayName}</h4></div>
          
               
             
                 <ToDoForm addtask={addtask}  />
       
        <ToDoList todoList={todoList} handeleToggle={handeleToggle} handeleFilter={handeleFilter} handeleRemoveAll={handeleRemoveAll} />
        
         
        
         </div>
         </div>
    
    </div>
    </div>
  
  );
}

export default App;
