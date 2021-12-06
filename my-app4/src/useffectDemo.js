import React, { useEffect,useState } from 'react';
function  DemouseEffect(){
    let [counter,state]=useState(0);
    let [counter2,state1]=useState(10);
    function UpadteChange(){
        state1(counter+1);
    }
    function UpadteChange2(){
        state(counter2+1);
    }
    useEffect(()=>
        console.log("did Mount"),[])
        useEffect(()=>
        console.log("did Update"),[counter2])
    return(
        <div>
            <h1>Hello World{counter}{counter2}</h1>
            <button onClick={UpadteChange}>Counter1</button>
            <button onClick={UpadteChange2}>Counter2</button>
        </div>
    )

}
export default DemouseEffect;