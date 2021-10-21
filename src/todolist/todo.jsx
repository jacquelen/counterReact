import {TodoForm} from './todoform'
import {Todolist} from './addtodo'
import '../countshow.css'

function Todo(){

    return(
        <div className="addtodo">

            <TodoForm/>
             <Todolist/>
        </div>
    )
}

export {Todo}