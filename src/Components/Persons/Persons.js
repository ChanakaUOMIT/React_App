import React, { Component } from 'react';
import Person from './Person/Person';


class Persons extends Component{
    constructor(props){
        super(props);
        console.log("[persons.js] Inside Constructor ",props);
      }
    
      componentWillMount(){
        console.log("[persons.js] Inside Components Will Mount");
      }
    
      componentDidMount(){
        console.log("[persons.js] Inside Components Did Mount");
      }
    render(){
        console.log("[persons.js] Inside render()");

        return this.props.persons.map((person, index )=>{
            return <Person
                name={person.name}
                age={person.age}
                click={()=> this.props.clicked(index)}
                key={person.id}
                changed={(event)=>this.props.changed(event, person.id)}
            />
        })
        
    }
}
// const persons=(props)=>props.persons.map((person, index)=>{
//         return <Person
//                 name={person.name}
//                 age={person.age}
//                 click={()=> props.clicked(index)}
//                 key={person.id}
//                 changed={(event)=>props.changed(event, person.id)}
//               />
       
//     });

export default Persons;

