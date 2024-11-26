'use client'
import { useState } from "react"
import { counterTrigger } from "@/helpers/actions";

export default function Counter(){
   const [count,setCount] =  useState(0);
   
    return(
        <div>
            <hr/>
            <div>Count:{count}</div>
            <button 
                onClick={()=>{
                    setCount(count+1);
                    counterTrigger()
                }}
            >
                Update
            </button>
        </div>
    )
}