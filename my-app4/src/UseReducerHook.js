import { useReducer } from "react";
import React  from 'react';

function reducer(state,action){
    if(action.type==="Decrement")
    {
        return {count:state.count-1}
    }
    else if(action.type==="Increment")
    {
        return {count:state.count+1}  
    }
}
let initialState={count:0};
function DemouseReduce(){
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            Count:{state.count}
            <button onClick={()=>dispatch({type:"Decrement"})}>-</button>
            <button onClick={()=>dispatch({type:"Increment"})}>+</button>

        </div>
    )
}
export default DemouseReduce;