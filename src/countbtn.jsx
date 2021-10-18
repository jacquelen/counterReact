import './countshow.css'

function CountBtn(props){


return(
    <div>
        <button onClick={props.plus}  className="btn" >increment</button>
        <button onClick={props.minus} className="btn"  > decrement</button>
    </div>
)
}
export {CountBtn}