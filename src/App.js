
import './App.css';
import{Navbar} from './navbar/navbar'
import {ShowCount} from './countshow'
import  {Home} from './home/home'
import{Shop} from './shop/shop'
import {Detail} from './detail/detail'
import {Footer} from './footer/footer'
import { Todo } from "./todolist/todo";
import { Form } from './form/form';
import {Log} from "./login/login"
import{BrowserRouter, Route , Switch} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route component={Home} path="/"exact />
      <Route component={Shop}  path="/shop" exact />
      <Route component={Detail}  path="/shop/:id"/>
      <Route component={ShowCount}  path="/counter"/>
      <Route component={Todo}  path="/todolist"/>
      <Route component={Form} path="/register"/>
      <Route component={Log} path="/login"/>
      </Switch>
       {/* <Shop/>
       <Detail/>
     < ShowCount/> */}
    </div>
    </BrowserRouter>
     <Footer/>
    </>
  );
}

export default App;
