import { useDispatch } from 'react-redux';
import{useSelector } from 'react-redux';
import {deletefromlistAction} from '../redux/todoreduce';

function Todolist(){
    const todoState= useSelector(state=>state.todos);
    const dispatch =useDispatch()     

 const remove=(params)=>{
     dispatch(deletefromlistAction(params))
console.log(params)
 }

   console.log(todoState);
    const todosList =
    todoState && todoState.length > 0 ? (
      todoState.map((todo, i) => {
        return (
          <ul key={i}>
            <li className="border d-flex">
            <div className="text">
              <p>Title : {todo.title}</p>
              <p>Content : {todo.content}</p>
              <button className="my-4 btn btn-primary btn-sm px-4"onClick={()=>{remove(i)}} > delete </button>
            </div>
            </li>
          </ul>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left list">
      <h3 className="mx-5 text-muted">Todos List</h3>
      {todosList}
    </div>
  );
}

export {Todolist}
