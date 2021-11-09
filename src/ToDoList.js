import React from 'react';
import ToDo from './ToDo';


function ToDoList({todoList,handeleToggle,handeleFilter,handeleRemoveAll, }) {
 
    return (
       <div>
           
            
            {todoList.map(todo =>{
                return(
                    <div>
                    <ToDo todo={todo} handeleToggle={handeleToggle} handeleFilter={handeleFilter} handeleRemoveAll={handeleRemoveAll} />
               </div>
                )
            
            })}
    <button style={{margin:'20px'}} onClick={handeleRemoveAll}  className= "button" >Clear completed</button>
         
           
            </div>
      
    )
}

export default ToDoList
