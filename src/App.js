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
          <Person name="Amal" age="75" >My hobby is Racing</Person>
          <Person name="Kamal" age="25" />
          <Person name="Sunil" age="3" />
          <Person name="Nimal" age="29" />

      </div>
    );
  }
}

export default App;
