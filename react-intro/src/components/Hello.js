import React from "react";

const Hello = (props) => {
    console.log('Name and age from Hello component')
    return (
      <div>
        <p>Hello {props.name} and you are {props.age} years old!</p>
      </div>
    )
  }

  export default Hello;