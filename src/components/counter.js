'use client'
import { useState } from "react"

export default function Counter(props){
   const [count,setCount] =  useState(0);
   
    return(
        <div>
            <hr/>
            <div>Count:{count}</div>
            <button 
                onClick={()=>{
                    setCount(count+1);
                    props.counterTrigger()
                }}
            >
                Update
            </button>
        </div>
    )
}