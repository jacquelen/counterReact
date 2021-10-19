import './countshow.css'

function Counter(props){
    return(
        <div className="count">
            <p>{props.number}</p>
        </div>
    )

}
export {Counter}


