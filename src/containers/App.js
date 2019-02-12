import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import classesStyle from './App.css'
import Persons from '../Components/Persons/Persons';
// import Radium, { StyleRoot } from 'radium';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log("[App.js] Inside Constructor ",props);

    this.state={
      persons:[
        {id:"dsfd1",name:"Amal", age:75},
        {id:"dsfd2",name:"Kamal", age:25},
        {id:"dsfd3",name:"Sunil", age:3},
        {id:"dsfd4",name:"Nimal", age:29},

    ],
      showPersons:false
    }
  }

  componentWillMount(){
    console.log("[App.js] Inside Components Will Mount");
  }

  componentDidMount(){
    console.log("[App.js] Inside Components Did Mount");
  }

  // state={
  //   persons:[
  //       {id:"dsfd1",name:"Amal", age:75},
  //       {id:"dsfd2",name:"Kamal", age:25},
  //       {id:"dsfd3",name:"Sunil", age:3},
  //       {id:"dsfd4",name:"Nimal", age:29},

  //   ],
  //   showPersons:false
  // }

  // switchNameHandler=(newName)=>{
  //   console.log("Clicked Switch Name");
  //   this.setState({
  //     persons:[
  //       // {name:newName, age:75},
  //       {name:"Amal", age:75},
  //       // {name:"Kamal", age:25},
  //       // {name:"Sunil", age:3},
  //       // {name:"Nimal", age:19},
  //     ]
  //   });

  //   // console.log(this.state.person[0].name);
  //   // this.state.person[0].name='Chanaka';
  //   // console.log(this.state.person[0].name);


  // }

  nameChangedHandler=(event, id)=>{
    const personIndex =this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person={
      ...this.state.persons[personIndex]
    };

    // const person =Object.assign({}, this.state.persons[personIndex])

    console.log(" ******** ",person);
    person.name=event.target.value;
    console.log(" ******** ",person);

    const persons=[...this.state.persons];
    persons[personIndex]=person;

    console.log('in nameChangedHandler ',event);

    this.setState({
      persons:persons
    })
  }

  deletePersonHandler=(personIndex)=>{
    const persons=[...this.state.persons]
    console.log("...State.persons ",persons);
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }


  togglePersonsHandler=()=>{
    const doesShow =this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }

  render() {
    console.log("[App.js] Inside Render")

    let persons=null;


    if(this.state.showPersons){
      persons =<Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          /> 

    }

    return (
        <div className={classesStyle.App}>
            <Cockpit 
              appTitle={this.props.title}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}
            />
            {persons}
      </div>
    );
  }
}

// export default Radium(App);
export default App;
