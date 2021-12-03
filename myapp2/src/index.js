import React, { useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var emp={
  "name":"Jack",
  "salary":1000
}
var dept={
  "department":"Finance",
  "Experience":3
}
class Employee extends React.Component{
  constructor(props){
    super(props)
    this.state={salary:props.details.salary}
  }
   handle=()=>{
    this.setState({salary:this.state.salary+1000})
    this.setState((prevState)=>{return {salary:prevState.salary+1000}})
  }
  render()
  {
    return <div>
      <h1>{this.props.details.name}</h1>
      <b>Salary is {this.state.salary}</b>
      <Department dept1={this.props.dep} />
      <button onClick={this.handle}>Increment Salary</button>
    </div>
  }

}
class Department extends React.Component{
constructor(props)
{
super(props)
}
render()
{
  return <div>
    <ol>
    <li>{this.props.dept1.department}</li>
    <li>Experience:{this.props.dept1.Experience} Years</li>
    </ol>
  </div>
}
}
ReactDOM.render(
  
  <Employee details={emp} dep={dept}/>
   
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
