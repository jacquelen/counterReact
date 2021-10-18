import './countshow.css'

function Counter(props){
    console.log(props, props.number)
    return(
        <div className="count">
            <p>{props.number}</p>
        </div>
    )

}
export {Counter}


