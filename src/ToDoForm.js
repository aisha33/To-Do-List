
import React, {useState} from 'react'

function ToDoForm({addtask}) {
    const [userInput ,setUserInput] = useState('')
    const handleChange=(e)=>{
        setUserInput(e.currentTarget.value)
    }
    const handelSubmit=(e)=>{
        if(userInput){
         e.preventDefault();
         addtask(userInput);
         setUserInput("")
        }else{
         console.log("error")
        }
}



    return (
            <div className="form-group has-feedback">
            <input value={userInput} type="text" onChange={handleChange}className="form-control"  placeholder="Enter task..." />
            <i className="fa Add fa-plus " title="Add item" onClick={handelSubmit}></i>
          
            
         </div>
       
    )
}

export default ToDoForm
