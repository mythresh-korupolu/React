import logo from './logo.svg';
import './App.css';
import React from 'react';
class App extends React.Component {
  render() {
           const App=(props)=>{
                   return<>
                   {props.compnent()}
                   </>
           }
  }
}
export default App;
