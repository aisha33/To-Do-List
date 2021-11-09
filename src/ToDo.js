import React, {useState}from 'react'
import './App.css';

function ToDo({todo,handeleToggle,handeleFilter}) {
    const handleClick= (e)=>{
        e.preventDefault()
        handeleToggle(e.currentTarget.id)
    }
     
    const handleOnChange = () => {

    setIsChecked(!isChecked);
  };
    const [isChecked, setIsChecked] = useState();
    
    return (
             
     <div>      
    
     <div className="todo">
        <div id={todo.id} key={todo.id + todo.task} name="todo" onClick={handleClick} value={todo.id} className={todo.complete ? "strike" : "todo1"} >
        {/* <input type="checkbox" className="topping" name="topping" value={todo.id}   checked={isChecked}
          onChange={handleOnChange} /> */}

          <span className="todo-task"> {todo.task}</span>
                   
        </div>
        <div><i className="fa fa-trash"  onClick={() => handeleFilter(todo.id)}></i>

</div>
         </div>
         </div>  
                  

    )
}

export default ToDo
