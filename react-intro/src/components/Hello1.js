import React from "react";
import Hello2 from './Hello2';

const Hello1 = (props) => {
    console.log('Spanish greetings from Hello1 component')
    return (
      <div>
        <p>Spanish: {props.spanishGreeting}</p>
        <Hello2 frenchGreeting={"Bonjour"}/>
      </div>
    )
  }

  export default Hello1;