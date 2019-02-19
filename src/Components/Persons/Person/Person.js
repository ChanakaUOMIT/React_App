import React, { Component } from 'react';
import classesStyle from "./Person.css";


class Person extends Component{
    constructor(props){
        super(props);
        console.log("[person.js] Inside Constructor ",props);
      }
    
      componentWillMount(){
        console.log("[person.js] Inside Components Will Mount");
      }
    
      componentDidMount(){
        console.log("[person.js] Inside Components Did Mount");
      }

    render(){
        console.log("[person.js] Inside the Render() ");
        return(
            <div className={classesStyle.Person}>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old..!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed}  value={this.props.name}/>
            </div>
        )
    }
}

// const person =(props)=>{
//     // return <p>I'm a Person and I am {Math.floor(Math.random()*30)} years old!</p>

//     // const rnd=Math.random();
//     // if(rnd>0.7){
//     //     throw new Error(" Something went Wrong")
//     // }
    
//     return(
//         <div className={classesStyle.Person}>
//             <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed}  value={props.name}/>
//         </div>
//     )

// };

export default Person; 