import { createStore } from "redux"

///redux connfig 
const ADD_TODOLIST="ADD_TODOLIST"
const DELETE_ITEM ="DELETE_ITEM"
///Action
export   const addTodoAction =(paylaod)=>{
    return{
         type: ADD_TODOLIST,
         paylaod
    }
}
 export  const deletefromlistAction=(paylaod)=>{
        return{
            type :DELETE_ITEM,
            paylaod
        }
    } 

////state 
const initialstate={
    todos:[
    ]
}
//////////////////////////
// return {
//     ...state,
//     todos: [...state.todos.filter((todo, i) => i !== action.payload)],
//   }
//////////////////////////////////////////
///Reduce
const todoReducer=(state=initialstate ,action)=>{
     // eslint-disable-next-line default-case
     switch(action.type){
         case ADD_TODOLIST:
             return{...state, todos:[...state.todos,action.paylaod]};
         case DELETE_ITEM:
             return{...state, todos:[...state.todos.filter((todo,i)=>i !==action.paylaod)]};    
             default:
                 return state;
     }
}

////Store
export const store =createStore(todoReducer);