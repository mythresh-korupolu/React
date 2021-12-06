import React from 'react'
import { useState } from 'react';
function Demohook2(){
   let  Employee=[
        { empId: 1234, name: 'John', designation:'SE' },
        { empId: 4567, name: 'Tom', designation:'SSE'},
        { empId: 8910, name: 'Kevin',designation:'TA'}

    ]
    let Array=useState(Employee)
    let cArray=Array[0];
    let fcall=Array[1];
    function changeArray(){
        fcall([...cArray,{empId:6789, name: 'Sam', designation:'TL' }])
    }
    return(
        <div>
            <table>
            <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Designation</th>
            </tr>
            <tbody>
               {cArray.map(Employee=>{return(
                   <tr>
                   <td>{Employee.empId}</td>
                   <td>{Employee.name}</td>
                   <td>{Employee.designation}</td>
                   </tr>
               )})}
            </tbody>
            </table>
            <button onClick={changeArray}>Add an Employee</button>
        </div>
    )
}
export default Demohook2