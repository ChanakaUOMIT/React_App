import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import classesStyle from './App.css'
import Person from './Components/Person/Person';
// import Radium, { StyleRoot } from 'radium';

class App extends Component {
  constructor(){
    super();
    console.log("Hi am in App")
  }

  state={
    persons:[
        {id:"dsfd1",name:"Amal", age:75},
        {id:"dsfd2",name:"Kamal", age:25},
        {id:"dsfd3",name:"Sunil", age:3},
        {id:"dsfd4",name:"Nimal", age:29},

    ],
    showPersons:false
  }

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

    // this.setState({
    //   persons:[
    //   {id:"dsfd1",name:event.target.value, age:75},
    //   {id:"dsfd2",name:"Kamal", age:25},
    //   {id:"dsfd3",name:"Sunil", age:3},
    //   {id:"dsfd4",name:"Nimal", age:29},
    //   ]
    // });
  }

  deletePersonHandler=(personIndex)=>{
    // const persons=this.state.persons;
    // const persons=this.state.persons.slice();
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
    const style={
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer',
      // ':hover':{
      //   backgroundColor:'lightgreen',
      //   color:'black'
      // }
    }

    let persons=null;

    if(this.state.showPersons){
      persons =(
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person 
                name={person.name}
                age={person.age}
                click={()=> this.deletePersonHandler(index)}
                key={person.id}
                changed={(event)=>this.nameChangedHandler(event, person.id)}
              />
             
          })}
        </div>
      );

      style.backgroundColor='red';
      // style[':hover']={
      //   backgroundColor:'salmon',
      //   color:'black'
      // }

      // persons=(
      //   <div>
      //     <Person 
      //           name={this.state.person[0].name} 
      //           age={this.state.person[0].age} 
      //           click={()=>this.switchNameHandler("Sampath")}
      //           changed={this.nameChangedHandler}
      //           >
      //           My hobby is Racing
      //         </Person>
      //         <Person 
      //           name={this.state.person[1].name} 
      //           age={this.state.person[1].age} 
      //         />

      //         <Person 
      //           name={this.state.person[2].name} 
      //           age={this.state.person[2].age} 
      //           // changed={this.nameChangedHandler}

      //         />

      //         <Person 
      //           name={this.state.person[3].name} 
      //           age={this.state.person[3].age} 
      //         />
      //   </div>
      // )
    }

    // let classes=['red','bold'].join(' ');
    // console.log("classes "+classes)

    const classes=[];
    if(this.state.persons.length<=2){
      classes.push('red');
    };
    if(this.state.persons.length<=1){
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>React Playground</h1>
          {/* <p className={classes} > */}
          <p className={classes.join(' ')} >
          {/* <p className="red" > */}
          {/* style={{color:'red'}} */}
           I am Come back React
          </p>

          {/* better way to pass paramerter */}
          <button 
            style={style}
            // onClick={this.switchNameHandler.bind(this, "Chanka..!")} >Switch Name</button>
            onClick={this.togglePersonsHandler} >Toggle Persons</button>

            {persons}
            {/* {this.state.showPersons ?
            <div>
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
            
          :null} */}


         

      </div>
    );
  }
}

// export default Radium(App);
export default App;
