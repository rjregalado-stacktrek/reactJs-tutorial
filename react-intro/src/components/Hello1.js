import React from "react";

const Hello1 = (props) => {
    console.log('Spanish greetings from Hello1 component')
    return (
      <div>
        <p>Spanish: {props.spanishGreeting}</p>
      </div>
    )
  }

  export default Hello1;