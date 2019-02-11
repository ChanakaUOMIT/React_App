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
    persons:[
      {name:"Amal", age:75},
      {name:"Kamal", age:25},
      {name:"Sunil", age:3},
      {name:"Nimal", age:29},

    ],
    showPersons:false
  }

  switchNameHandler=(newName)=>{
    console.log("Clicked Switch Name");
    this.setState({
      persons:[
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
      persons:[
        {name:event.target.value, age:75},
      {name:"Kamal", age:25},
      {name:"Sunil", age:3},
      {name:"Nimal", age:29},
      ]
    });
  }


  togglePersonsHandler=()=>{
    const doesShow =this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }

  render() {
    const style={
      backgroundColor:'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer'
    }

    let persons=null;

    if(this.state.showPersons){
      persons =(
        <div>
          {this.state.persons.map(person =>{
            return <Person 
                name={person.name}
                age={person.age}
              />
            
          })}
        </div>
      )

      // persons = (
			// 	// <div>
			// 		{this.state.persons.map((person, idx) => {
			// 			return <Person 
			// 				name={person.name} age={person.age} key={person.id}
			// 				change={(event) => this.handleNameChange(event, person.id)} 
			// 				click={() => this.handleClickDelete(idx)}
			// 			/>
			// 		})}
			// 	// </div> 
			// );
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
    return (
      <div className="App">
          <p>
           I am Come back React
          </p>

          {/* better way to pass paramerter */}
          <button 
            style={style}
            // onClick={this.switchNameHandler.bind(this, "Chanka..!")} >Switch Name</button>
            onClick={this.togglePersonsHandler} >Switch Name</button>

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

export default App;
