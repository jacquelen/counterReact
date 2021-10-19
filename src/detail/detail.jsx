/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react"
import "../countshow.css"

function Detail({match}){
    
    const[pdtdetail, setpdtdetail]= useState(null)

    useEffect(()=>{
     Getitems()
    },[])



  const Getitems=()=>{
   return fetch(`https://fakestoreapi.com/products/${match.params.id}`)
    .then(res=>res.json())
    .then((json)=>{setpdtdetail(json)
        console.log(json)
    console.log(pdtdetail)
    })

    }
    return(
        <div>
         {
             pdtdetail
             ?
             <div className="detail-section"> 
                 <div className="detail-img">
                 <img src={pdtdetail.image}  className="pdt-img"/>
     
                 </div>
                 <div className="detail-item">
                 <h2>{pdtdetail.title}</h2>
                 <h3>Category: {pdtdetail.category}</h3>
                 <p>price: {pdtdetail.price}</p>
                 <p> Rate:{pdtdetail.rating.rate}</p>
                 <p>count:{pdtdetail.rating.count} </p>
     
                 </div>
                 
                 </div>

             :<div>
                 <h1>loading</h1>
             </div>
         }
        </div>

    )
}
export{Detail}