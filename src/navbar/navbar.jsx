/* eslint-disable jsx-a11y/anchor-is-valid */
import "../countshow.css"
import {Link} from 'react-router-dom'


function Navbar(){

return(
        <div className="nav">

           <h1 className="logo">
               logo
           </h1>

           <nav className="nav-ul">
               <ul>      
                   <li><Link to="/"> Home </Link> </li>
                   <li><Link to="/shop"> Shop </Link> </li>
                   <li><Link to="/counter"> Counter </Link> </li>
                   <li><Link to="todolist"> Todo-List </Link> </li>
                
               </ul>
           </nav>

        </div>
    
)

}
export {Navbar}