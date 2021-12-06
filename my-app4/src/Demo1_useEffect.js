import React, { useEffect,useState } from 'react';
function UseffectDemo1(){
    let [counter,IncreaseCounter]=useState(0);
    function updateCounter()
    {
        IncreaseCounter(counter+1);
    }
    useEffect(()=>console.log("called"))
 
    
    return(
        <div>
            <h1>Hello World!{counter}</h1>
            <button onClick={updateCounter}>Counter</button>
        </div>
    )
}
export default UseffectDemo1;