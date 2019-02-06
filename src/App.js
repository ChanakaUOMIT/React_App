import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person/Person';

class App extends Component {
  constructor(){
    super();
    console.log("Hi am in App")
  }
  render() {
    return (
      <div className="App">
          <p>
           I am Come back React
          </p>
          <Person />
          <Person />
          <Person />
          <Person />

      </div>
    );
  }
}

export default App;
