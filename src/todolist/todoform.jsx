import {addTodoAction} from '../redux/todoreduce'
import { useDispatch} from 'react-redux'
import { useState } from 'react';


 const TodoForm = () => {      
    const [title,settitle]=useState('')
    const [content,setcontet]=useState('')
    const dispatch= useDispatch();
    
    const addlist=(e)=>{
        e.preventDefault();
        dispatch(addTodoAction({title,content}))
        settitle(" ");
        setcontet(" ");
    }    
    
    return(
        <div className="form"> 
        <h3 className="text-muted mb-4">Add TODO</h3>
  
        <form onSubmit={addlist}>
          Title <br />
          <input
            type="text"
            className="title"
            onChange={(e) =>{settitle(e.target.value)} }
          />
          <br />
          Content <br />
          <textarea
          className="content"
            onChange={(e) =>{setcontet(e.target.value)} }
          ></textarea>
          <br />
          <button className="my-4 btn btn-primary btn-sm px-4" type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
}

export{TodoForm}