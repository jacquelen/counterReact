
import { useState } from 'react';
import {Counter} from './counter'
import {CountBtn} from './countbtn'
import './countshow.css'

function ShowCount(){

const [countVal, setcountVal]=useState(0)
console.log(countVal,"val")
const plus=()=>{
    setcountVal(countVal+1)
}

const minus=()=>{
    setcountVal(countVal-1)
    if(countVal<=0){
        setcountVal(0)
    }
}






    return(
        <div className="show"> 
          <Counter number={countVal} />
           <CountBtn  plus={plus} minus={minus} />
        </div>
    )
}

export {ShowCount};