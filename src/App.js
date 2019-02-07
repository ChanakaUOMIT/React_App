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

  switchNameHandler=(newName)=>{
    console.log("Clicked Switch Name");
    this.setState({
      person:[
        {name:newName, age:75},
        {name:"Kamal", age:25},
        {name:"Sunil", age:3},
        {name:"Nimal", age:19},
      ]
    });

    // console.log(this.state.person[0].name);
    // this.state.person[0].name='Chanaka';
    // console.log(this.state.person[0].name);


  }

  nameChangedHandler=(event)=>{
    console.log('in nameChangedHandler ',event)
    this.setState({
      person:[
        {name:event.target.value, age:75},
      {name:"Kamal", age:25},
      {name:"Sunil", age:3},
      {name:"Nimal", age:29},
      ]
    });
  }

  render() {
    return (
      <div className="App">
          <p>
           I am Come back React
          </p>

          {/* better way to pass paramerter */}
          <button onClick={this.switchNameHandler.bind(this, "Chanka..!")} >Switch Name</button>

          <Person 
            name={this.state.person[0].name} 
            age={this.state.person[0].age} 
            click={()=>this.switchNameHandler("Sampath")}
            changed={this.nameChangedHandler}
            >
            My hobby is Racing
          </Person>
          <Person 
            name={this.state.person[1].name} 
            age={this.state.person[1].age} 
          />

          <Person 
            name={this.state.person[2].name} 
            age={this.state.person[2].age} 
            // changed={this.nameChangedHandler}

          />

          <Person 
            name={this.state.person[3].name} 
            age={this.state.person[3].age} 
          />

      </div>
    );
  }
}

export default App;
