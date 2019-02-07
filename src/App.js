import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person/Person';

class App extends Component {
  constructor(){
    super();
    console.log("Hi am in App")
  }

  state={
    person:[
      {name:"Amal", age:75},
      {name:"Kamal", age:25},
      {name:"Sunil", age:3},
      {name:"Nimal", age:29},

    ]
  }

  switchNameHandler=()=>{
    console.log("Clicked Switch Name");
  }
  
  render() {
    return (
      <div className="App">
          <p>
           I am Come back React
          </p>

          <button onClick={this.switchNameHandler} >Switch Name</button>

          <Person name={this.state.person[0].name} age={this.state.person[0].age} >My hobby is Racing</Person>
          <Person name={this.state.person[1].name}  age={this.state.person[1].age} />
          <Person name={this.state.person[2].name}  age={this.state.person[2].age} />
          <Person name={this.state.person[3].name}  age={this.state.person[3].age} />

      </div>
    );
  }
}

export default App;
