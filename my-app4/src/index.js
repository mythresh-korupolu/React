import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Demohook from './Demohook';
import Demohook2 from './Demohook2';
import Employees from './Demohook3';
import DemouseEffect from './useffectDemo';
import reportWebVitals from './reportWebVitals';
import UseffectDemo1 from './Demo1_useEffect'
import DemouseReduce from './UseReducerHook'
import CalculateFactorial from './UseMemoizationHook';
import LogButtonClicks from './useReferencehook'
function Hello(){
  
  return(<div>
    <Hook1></Hook1>
  <Hook></Hook>
  <Demohook></Demohook>
  <Demohook2></Demohook2>
  <Employees></Employees>
  <DemouseEffect></DemouseEffect>
    <UseffectDemo1></UseffectDemo1>
  <DemouseReduce></DemouseReduce>
  <CalculateFactorial></CalculateFactorial>
  <LogButtonClicks></LogButtonClicks>
      </div>)
}
function Hook1(){
  let hookstate=useState(0);
   let   setstat=hookstate[0];
   let  call=hookstate[1];
  console.log(hookstate)
  function updateCounter(){
    call(setstat+1)
  }
  
  
  return(
    <div>
        <button onClick={updateCounter}> Click Here</button>
        <h1>Hello React!{setstat}</h1>
      </div>
  )
}

class Hook extends React.Component{
  constructor()
  {
    super();
    this.state={counter:0}
  }
  updateCounter=()=>{
    this.setState({counter:this.state.counter+1});
  }
  render()
  {
    return(
      <div>
        <button onClick={this.updateCounter}> Click Here</button>
        <h1>Hello React!{this.state.counter}</h1>
      </div>

    )
  }
}
ReactDOM.render(
  <Hello/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
