/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import '../countshow.css'
function Shop(){
const [pdcts ,setpdcts]=useState([])

    useEffect(()=>{
   getitems()
    },[])
  const getitems=()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setpdcts(json)) 
        

    }
    return(
        <section  className="products">
            {pdcts.map((item)=>{
                return(
                    <div  key={item.id}   className="pdt">
                        <img className="pdt-img"   src={item.image}  />
                        <h2>{item.title}  </h2>
                        <h3> price: {item.price} </h3>
                        <h3>Rate: {item.rating.rate}</h3>
                        <p> {item.description}</p>
                      <Link to={`/shop/${item.id}`} className="link" > more details </Link>
                    </div>
                )
            }
            )}   
        </section>
    )
}

export {Shop}