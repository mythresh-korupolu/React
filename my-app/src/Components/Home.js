import logo from './logo.svg';
import './App.css';
import React from 'react';
class Home extends React.Component {

const Home={props}=>{
    return (
        <App component={()=>{
          return <div>render in App Component </div>  
        }}/>
    )
}
}
export default Home;