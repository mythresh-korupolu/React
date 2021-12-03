import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './demo.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

const emp1 = {
  "empId": 100,
  "empName": "Jack",
  "age": 30,
  "salary": 50000,
  "image": "emp1.png"
}
const emp2 = {
  "empId": 101,
  "empName": "Jane",
  "age": 24,
  "salary": 40000,
  "image": "emp2.png"
}
function card(emp)
{
var status="";
if(emp.age<25)
{
   status=<span className='text-info'> -fresher</span>
}
return(<div key={emp.empId} className="card" style={{ "width": 200 }}>
<img className="card-img-top" src={emp.image} height="200" alt="Card image cap" />
<div className="card-body">
  <h5 className="card-title text-center">{emp.empName}</h5>
  <p className="card-text">
    <span>Id: {emp.empId}</span><br />
    <span>Age: {emp.age}</span> {status}<br />
    <span>Salary: {emp.salary}</span><br />
  </p>
  <a href="#" className="btn btn-primary">Edit Details</a>
</div>
</div>)

}
var details=[emp1,emp2]

const element=<div>
                <h1 className="h1" style={{color:"rgb(0, 123, 255)"}}>Employee Details</h1>
                <div>
                  {details.map(emp=>card(emp))}
                </div>
              </div>
const emp={
  "name":"Jack",
  "salary1":1000
}
function handle()
{
  console.log("Increment")
}
function Employe(attributes)
{
  return <div>
          <h1>{attributes.empl.name}</h1>
          <b>{attributes.empl.salary1}</b>
          <Department/>
          <button onClick={handle}>Increment Salary</button>
  </div>
}
function Department(props)
{
  return <div>
          <ol>
          <li>Finance</li>
          <li>Experience:3</li>
          </ol>
          </div>
}
ReactDOM.render(
 <div> <Employe empl={emp} /></div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
