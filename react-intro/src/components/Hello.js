import React from "react";
import Hello1 from './Hello1';

const Hello = (props) => { //properties
    console.log('Name and age from Hello component')
    return (
      <div>
        <p>Hello {props.name} and you are {props.age} years old!</p>
        <p>Sex: {props.sex}</p>
        <Hello1 spanishGreeting={"Buenas Dias"}/>
      </div>
    )
  }

  export default Hello;