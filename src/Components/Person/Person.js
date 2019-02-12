import React from 'react';
import classesStyle from "./Person.css";


const person =(props)=>{
    // return <p>I'm a Person and I am {Math.floor(Math.random()*30)} years old!</p>

    const rnd=Math.random();
    if(rnd>0.7){
        throw new Error(" Something went Wrong")
    }
    
    return(
        <div className={classesStyle.Person}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}  value={props.name}/>
        </div>
    )

};

export default person; 