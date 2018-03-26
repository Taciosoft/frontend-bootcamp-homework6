import React, { Component } from 'react';
import './App.css';
import Content from './content';

class App extends Component {
  componentDidMount(){
    if (module.hot){
       module.hot.accept('./content',() =>{
         this.forceUpdate()
       } )
    }
  }
  
  render() {
    return (
      <div className="App">
      <Content/>
      </div>
    );
  }
}

export default App;
