import React from 'react';
import classesStyle from './Cockpit.css';

const cockpit=(props)=>{
    const classes=[];
    let btnClass='';

    if(props.showPersons){
        btnClass=classesStyle.Red;
    }
    if(props.persons.length<=2){
        // classes.push('red');
        classes.push(classesStyle.red);
      };
      if(props.persons.length<=1){
        classes.push(classesStyle.bold);
      }


      return(
          <div className={classesStyle.Cockpit}>
              <h1>{props.appTitle}</h1>
                <p className={classes.join(' ')} >
                I am Come back React
                </p>

                <button 
                    className={btnClass}
                    onClick={props.clicked} >Toggle Persons</button>
          </div>
      )
}

export default cockpit;